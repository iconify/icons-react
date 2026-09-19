import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpdks0bky.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpdks0bky"/>`,
		"fallback": "fluent-mdl2:picture-tile",
	});
}

export default Component;
