import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0q8t5bbo.css';
import '../../css/d/dmf_nf1iq.css';
import '../../css/f/fw-djbcff.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0q8t5bbo"/><path class="dmf_nf1iq"/><path class="fw-djbcff"/>`,
		"fallback": "selfhst:speedtest-tracker",
	});
}

export default Component;
