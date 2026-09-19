import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rkcn1o1ue.css';
import '../../css/s/scxuwubey.css';
import '../../css/t/t0r3qrbre.css';
import '../../css/t/tnlf20boh.css';
import '../../css/y/yxosflbcv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rkcn1o1ue"/><path class="scxuwubey"/><path class="t0r3qrbre"/><path class="tnlf20boh"/><path class="yxosflbcv"/></g>`,
		"fallback": "fluent-emoji-flat:locked-with-pen",
	});
}

export default Component;
