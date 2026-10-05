import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/aouhjubqb.css';
import '../../css/q/qta0skbgs.css';
import '../../css/n/nlrcsmemk.css';
import '../../css/n/nfamginwy.css';
import '../../css/s/sk-5kybqt.css';
import '../../css/s/sojwkwbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="aouhjubqb"/><path class="qta0skbgs"/><path class="nlrcsmemk"/><path class="nfamginwy"/><path class="sk-5kybqt"/><path class="sojwkwbbk"/></g>`,
		"fallback": "matita:ruler",
	});
}

export default Component;
