import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dee5j_bca.css';
import '../../css/b/b4-4m7vca.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dee5j_bca"/><path class="b4-4m7vca"/></g>`,
		"fallback": "streamline-color:popcorn-flat",
	});
}

export default Component;
