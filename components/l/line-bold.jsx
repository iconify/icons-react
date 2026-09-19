import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahorj_tjz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahorj_tjz"/>`,
		"fallback": "glyphs:line-bold",
	});
}

export default Component;
