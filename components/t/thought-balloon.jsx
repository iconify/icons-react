import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au6wgzbnz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au6wgzbnz"/>`,
		"fallback": "fluent-emoji-flat:thought-balloon",
	});
}

export default Component;
