import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu_m8k-dt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu_m8k-dt"/>`,
		"fallback": "fluent-emoji-high-contrast:speaker-low-volume",
	});
}

export default Component;
