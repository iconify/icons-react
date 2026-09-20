import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/ggl2d_wnz.css';
import '../../css/v/vhzhf4b7t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ggl2d_wnz"/><path class="vhzhf4b7t"/></g>`,
		"fallback": "streamline-flex-color:tag-alt-flat",
	});
}

export default Component;
