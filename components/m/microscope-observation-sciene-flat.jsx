import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o8fmm0bon.css';
import '../../css/d/dp9zk5hlz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o8fmm0bon"/><path class="dp9zk5hlz"/></g>`,
		"fallback": "streamline-sharp-color:microscope-observation-sciene-flat",
	});
}

export default Component;
