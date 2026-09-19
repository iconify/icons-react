import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/ggfhrnbon.css';
import '../../css/q/qr3bw21xi.css';
import '../../css/t/ty2664dkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(2 5)" class="bi12bsetm"><path class="ggfhrnbon"/><circle class="qr3bw21xi"/><path class="ty2664dkh"/></g>`,
		"fallback": "gcp:stream-suite",
	});
}

export default Component;
