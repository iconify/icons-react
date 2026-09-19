import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1yk60bwg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1yk60bwg"/>`,
		"fallback": "dashicons:video-alt2",
	});
}

export default Component;
