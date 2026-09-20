import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esf_cdlak.css';
import '../../css/d/dxwmkobkt.css';
import '../../css/m/m79ns814e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esf_cdlak"/><path class="dxwmkobkt"/><path class="m79ns814e"/>`,
		"fallback": "lineicons:microsoft-edge",
	});
}

export default Component;
