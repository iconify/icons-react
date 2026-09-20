import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gip4t6bed.css';
import '../../css/g/gdhs6pexy.css';
import '../../css/n/nrxmdfbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gip4t6bed"/><path class="gdhs6pexy"/><path class="nrxmdfbsh"/></g>`,
		"fallback": "streamline-freehand-color:water-fountain-drink",
	});
}

export default Component;
