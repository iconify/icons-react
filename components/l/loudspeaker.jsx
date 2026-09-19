import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5hy1lvhc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5hy1lvhc"/>`,
		"fallback": "fluent-emoji-high-contrast:loudspeaker",
	});
}

export default Component;
