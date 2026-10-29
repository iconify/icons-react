import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/holidngbb.css';
import '../../css/a/azqmc2bkv.css';
import '../../css/r/r6we66bvg.css';
import '../../css/t/t5foyebrh.css';
import '../../css/w/wa4w_3bpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="holidngbb wm-k"/><path class="azqmc2bkv wm-k"/><path class="r6we66bvg wm-k"/><path class="t5foyebrh wm-a"/><path class="wa4w_3bpb wm-a"/></g>`,
		"fallback": "withicons:text-cursor-input-sketch",
	});
}

export default Component;
