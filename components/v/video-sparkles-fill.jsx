import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qrpp1x5rl.css';
import '../../css/x/xeflu-frc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qrpp1x5rl"/><path class="xeflu-frc"/></g>`,
		"fallback": "keyline-icons:video-sparkles-fill",
	});
}

export default Component;
