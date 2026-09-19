import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irq4-3e5k.css';
import '../../css/d/d-zstca3u.css';
import '../../css/k/klkict4oo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irq4-3e5k"/><path class="d-zstca3u"/><path class="klkict4oo"/>`,
		"fallback": "carbon:skip-forward-outline-filled",
	});
}

export default Component;
