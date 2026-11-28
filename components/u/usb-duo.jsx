import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sper1i9ar.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iq0lnbcwp.css';
import '../../css/c/cvropxbzh.css';
import '../../css/g/g7ypn4ocd.css';
import '../../css/n/nlk-ki-ax.css';
import '../../css/e/e1t-sfb1b.css';
import '../../css/n/n0p7a8b-q.css';
import '../../css/t/tricn7b4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary sper1i9ar"/><g class="dt0cm9dhy primary"><path class="iq0lnbcwp"/><path class="cvropxbzh"/><path class="g7ypn4ocd"/><path class="nlk-ki-ax"/><path class="e1t-sfb1b"/><path class="n0p7a8b-q"/><path class="tricn7b4e"/></g>`,
		"fallback": "iconaut:usb-duo",
	});
}

export default Component;
