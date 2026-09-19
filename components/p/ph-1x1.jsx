import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4kufac2j.css';
import '../../css/f/fjwq2b_zi.css';
import '../../css/g/g46tn_ppl.css';
import '../../css/t/t0dur4bqd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4kufac2j"/><path class="fjwq2b_zi"/><path class="g46tn_ppl"/><path class="t0dur4bqd"/>`,
		"fallback": "flag:ph-1x1",
	});
}

export default Component;
