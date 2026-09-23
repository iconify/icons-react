import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qrpp1x5rl.css';
import '../../css/o/o6s-pn-vu.css';
import '../../css/s/sjqxfeb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qrpp1x5rl"/><path class="o6s-pn-vu"/><path class="sjqxfeb6h"/></g>`,
		"fallback": "keyline-icons:video-sparkles-two-tone",
	});
}

export default Component;
