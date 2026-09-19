import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1-nasbzp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v1-nasbzp"/>`,
		"fallback": "glyphs:volume-outline",
	});
}

export default Component;
