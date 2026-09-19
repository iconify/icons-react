import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvsmmt4aw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvsmmt4aw"/>`,
		"fallback": "bi:tv-fill",
	});
}

export default Component;
