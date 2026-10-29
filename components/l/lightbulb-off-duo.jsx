import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rzdywtb4l.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/e/e7nou4btv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rzdywtb4l"/><path class="qr4ochb5c wm-s"/><path class="e7nou4btv"/></g>`,
		"fallback": "withicons:lightbulb-off-duo",
	});
}

export default Component;
