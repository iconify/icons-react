import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za7uqbcjq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za7uqbcjq"/>`,
		"fallback": "fluent-emoji-high-contrast:optical-disk",
	});
}

export default Component;
