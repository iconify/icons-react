import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/k/kckc1iwlf.css';
import '../../css/j/jyg6q1bpv.css';
import '../../css/k/knvbzwbfh.css';
import '../../css/x/xz1jepbuj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG8FygvdsX" x1="237.1" x2="166.2" y1="288.1" y2="60.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="kckc1iwlf"/></linearGradient><path fill="url(#SVG8FygvdsX)" class="jyg6q1bpv"/><path class="knvbzwbfh"/><path class="xz1jepbuj"/>`,
		"fallback": "selfhst:microsoft-power-automate-light",
	});
}

export default Component;
