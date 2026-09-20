import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f3az5g2xq.css';
import '../../css/g/gng45o-wd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="f3az5g2xq"/><path class="gng45o-wd"/></g>`,
		"fallback": "streamline-freehand-color:phone-dial",
	});
}

export default Component;
