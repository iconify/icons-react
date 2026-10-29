import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/udqu4n_ci.css';
import '../../css/e/e39p62u0b.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="udqu4n_ci"/><path class="e39p62u0b wm-a"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons:map-pin-off",
	});
}

export default Component;
