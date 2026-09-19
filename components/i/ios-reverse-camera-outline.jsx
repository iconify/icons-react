import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2n_4vblw.css';
import '../../css/p/psnhj8bls.css';
import '../../css/c/cauo7_gzb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2n_4vblw"/><path class="psnhj8bls"/><path class="cauo7_gzb"/>`,
		"fallback": "ion:ios-reverse-camera-outline",
	});
}

export default Component;
