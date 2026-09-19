import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0gu42b_k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0gu42b_k"/>`,
		"fallback": "fluent-emoji-flat:small-orange-diamond",
	});
}

export default Component;
