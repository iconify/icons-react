import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7e3ocbpf.css';
import '../../css/u/ult_smbrq.css';
import '../../css/m/mn_gkus6l.css';
import '../../css/i/iwdgxxwdu.css';
import '../../css/n/n4i_iou6h.css';
import '../../css/t/tzu5274vv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c7e3ocbpf"/><path class="ult_smbrq"/><path class="mn_gkus6l"/><path class="iwdgxxwdu"/><path class="n4i_iou6h"/><path class="tzu5274vv"/></g>`,
		"fallback": "hugeicons:water-pump",
	});
}

export default Component;
