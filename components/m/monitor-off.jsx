import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wniaoxfis.css';
import '../../css/i/iliwrx8mt.css';
import '../../css/k/kc27ivnqr.css';
import '../../css/g/g3cuk7bic.css';
import '../../css/v/vxuqhab0r.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wniaoxfis"/><path class="iliwrx8mt"/><path class="kc27ivnqr wm-shine"/><path class="g3cuk7bic wm-k"/><path class="vxuqhab0r wm-a"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons-kawaii:monitor-off",
	});
}

export default Component;
