import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kzxcsm_ro.css';
import '../../css/x/x5kf7jppd.css';
import '../../css/k/kcboqsb5t.css';
import '../../css/c/chf-19bnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kzxcsm_ro"/><path class="x5kf7jppd"/><path class="kcboqsb5t"/><path class="chf-19bnc"/></g>`,
		"fallback": "streamline-ultimate-color:keyboard-eject",
	});
}

export default Component;
