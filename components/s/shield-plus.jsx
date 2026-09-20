import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1hrasbfn.css';
import '../../css/k/kl1808iyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1hrasbfn"/><path class="kl1808iyd"/>`,
		"fallback": "uim:shield-plus",
	});
}

export default Component;
