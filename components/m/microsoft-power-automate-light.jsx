import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/k/kckc1iwlf.css';
import '../../css/j/jyg6q1bpv.css';
import '../../css/j/jj1xiqb7u.css';
import '../../css/u/umai3-btd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGy2fQkcWU" x1="237.111" x2="166.193" y1="288.129" y2="60.179" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="kckc1iwlf"/></linearGradient><path fill="url(#SVGy2fQkcWU)" class="jyg6q1bpv"/><path class="jj1xiqb7u"/><path class="umai3-btd"/>`,
		"fallback": "selfhst:microsoft-power-automate-light",
	});
}

export default Component;
