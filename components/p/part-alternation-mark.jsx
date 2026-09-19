import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz7v9cbjg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz7v9cbjg"/>`,
		"fallback": "fluent-emoji-flat:part-alternation-mark",
	});
}

export default Component;
