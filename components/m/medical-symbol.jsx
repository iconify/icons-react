import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go64vgysl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go64vgysl"/>`,
		"fallback": "fluent-emoji-high-contrast:medical-symbol",
	});
}

export default Component;
