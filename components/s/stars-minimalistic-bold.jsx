import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2tro4b9k.css';
import '../../css/i/itttytmxx.css';
import '../../css/x/xmy4_843o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2tro4b9k"/><path class="itttytmxx"/><path class="xmy4_843o"/>`,
		"fallback": "solar:stars-minimalistic-bold",
	});
}

export default Component;
