import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1tsy5brq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1tsy5brq"/>`,
		"fallback": "carbon:stop-sign-filled",
	});
}

export default Component;
