import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_j778rnr.css';
import '../../css/h/huj_k0bxh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n_j778rnr"/><path clip-rule="evenodd" class="huj_k0bxh"/>`,
		"fallback": "selfhst:nextcloud-talk-dark",
	});
}

export default Component;
