import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr71bdctn.css';
import '../../css/k/kezkawjrn.css';
import '../../css/c/czpegmbjb.css';
import '../../css/s/ss_828btg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr71bdctn"/><path class="kezkawjrn"/><path class="czpegmbjb"/><path class="ss_828btg"/>`,
		"fallback": "energy-icons:solar-cooker-48",
	});
}

export default Component;
