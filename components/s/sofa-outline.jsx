import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg8h_74nv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yg8h_74nv"/>`,
		"fallback": "glyphs:sofa-outline",
	});
}

export default Component;
