import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bjcq8u-lh.css';
import '../../css/i/iqy4f3ajf.css';
import '../../css/s/s3rslbcfp.css';
import '../../css/z/zwiw2-bkv.css';
import '../../css/g/g3w7qrfpr.css';
import '../../css/c/ca53wpbej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bjcq8u-lh"/><path class="iqy4f3ajf"/><path class="s3rslbcfp"/><path class="zwiw2-bkv"/><path class="g3w7qrfpr"/><path class="ca53wpbej"/></g>`,
		"fallback": "solar:remote-controller-linear",
	});
}

export default Component;
