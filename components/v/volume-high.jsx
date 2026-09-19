import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfwj7h0yt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfwj7h0yt"/>`,
		"fallback": "fa7-solid:volume-high",
	});
}

export default Component;
