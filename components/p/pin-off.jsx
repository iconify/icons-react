import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x97f9bb-q.css';
import '../../css/q/q-qnch_8l.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="x97f9bb-q"/><path class="q-qnch_8l wm-a"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons:pin-off",
	});
}

export default Component;
