import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oys3jfy5i.css';
import '../../css/h/h1w9cac_o.css';
import '../../css/k/klv_anb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="oys3jfy5i"/><path class="h1w9cac_o"/><path class="klv_anb-u"/></g>`,
		"fallback": "streamline-freehand-color:share-circles",
	});
}

export default Component;
