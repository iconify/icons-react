import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imw09osfp.css';
import '../../css/n/n_03jgbut.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imw09osfp"/><path class="n_03jgbut"/>`,
		"fallback": "selfhst:waydroid-dark",
	});
}

export default Component;
