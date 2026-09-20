import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud2q-obza.css';
import '../../css/s/s_1q0sbix.css';
import '../../css/w/w37xe3b9h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud2q-obza"/><path class="s_1q0sbix"/><path class="w37xe3b9h"/>`,
		"fallback": "selfhst:watchtower-dark",
	});
}

export default Component;
