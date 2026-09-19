import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuo3ambkw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuo3ambkw"/>`,
		"fallback": "fluent-emoji-high-contrast:person-zombie",
	});
}

export default Component;
