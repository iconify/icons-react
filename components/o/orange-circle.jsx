import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwwvjobsd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwwvjobsd"/>`,
		"fallback": "fluent-emoji-flat:orange-circle",
	});
}

export default Component;
