import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgkx99bcq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgkx99bcq"/>`,
		"fallback": "fluent-emoji-high-contrast:racing-car",
	});
}

export default Component;
