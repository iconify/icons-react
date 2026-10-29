import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gof6yrqzo.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/k/kk0onebow.css';
import '../../css/a/aq_2o7bhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gof6yrqzo"/><path class="qr4ochb5c wm-s"/><path class="kk0onebow"/><path class="aq_2o7bhr wm-a"/></g>`,
		"fallback": "withicons:server-off-duo",
	});
}

export default Component;
