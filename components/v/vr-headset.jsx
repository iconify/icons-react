import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr_fswb5t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr_fswb5t"/>`,
		"fallback": "game-icons:vr-headset",
	});
}

export default Component;
