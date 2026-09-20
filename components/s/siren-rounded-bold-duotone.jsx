import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cqm0sq4fu.css';
import '../../css/b/bwyejukxj.css';
import '../../css/v/vp3zzxb6y.css';
import '../../css/e/etct30bmr.css';
import '../../css/u/u4dvewbdn.css';
import '../../css/n/n8qbuufsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cqm0sq4fu"/><path class="bwyejukxj"/><path class="vp3zzxb6y"/><path class="etct30bmr"/><path class="u4dvewbdn"/><path class="n8qbuufsn"/></g>`,
		"fallback": "solar:siren-rounded-bold-duotone",
	});
}

export default Component;
