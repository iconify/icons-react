import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-u__gbwn.css';
import '../../css/i/ipbc4vbmv.css';
import '../../css/c/c19rfsb2z.css';
import '../../css/f/f3if6-vqm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-u__gbwn"/><path class="ipbc4vbmv"/><path class="c19rfsb2z"/><path class="f3if6-vqm"/>`,
		"fallback": "ion:ios-rose-outline",
	});
}

export default Component;
