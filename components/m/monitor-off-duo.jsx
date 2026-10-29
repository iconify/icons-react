import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ir-rmujqd.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/g/g3cuk7bic.css';
import '../../css/v/vxuqhab0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ir-rmujqd"/><path class="qr4ochb5c wm-s"/><path class="g3cuk7bic"/><path class="vxuqhab0r wm-a"/></g>`,
		"fallback": "withicons:monitor-off-duo",
	});
}

export default Component;
