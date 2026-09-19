import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw3g69bqk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw3g69bqk"/>`,
		"fallback": "fluent-emoji-high-contrast:speech-balloon",
	});
}

export default Component;
