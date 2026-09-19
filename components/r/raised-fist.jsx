import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg310jbjy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg310jbjy"/>`,
		"fallback": "fluent-emoji-high-contrast:raised-fist",
	});
}

export default Component;
