import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gfjheqbit.css';
import '../../css/w/wsynvg5ce.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gfjheqbit"/><path class="wm-a wsynvg5ce"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons:microphone-off",
	});
}

export default Component;
