import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ethc65zvb.css';
import '../../css/p/pkygmcb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ethc65zvb"/><path class="pkygmcb8t"/>`,
		"fallback": "boxicons:medal-alt-filled",
	});
}

export default Component;
