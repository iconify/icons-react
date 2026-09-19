import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5yi_xb8t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5yi_xb8t"/>`,
		"fallback": "fa6-brands:lastfm",
	});
}

export default Component;
