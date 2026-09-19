import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1v9r1bdv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1v9r1bdv"/>`,
		"fallback": "fluent-emoji-high-contrast:running-shoe",
	});
}

export default Component;
