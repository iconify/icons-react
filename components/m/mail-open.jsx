import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/irt5l-b5w.css';
import '../../css/y/yx4rxh_0m.css';
import '../../css/u/unhfirttg.css';
import '../../css/k/kr4apibhv.css';
import '../../css/r/r51g0_mcb.css';
import '../../css/u/uomh9ebpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="irt5l-b5w wm-shadow"/><path class="yx4rxh_0m"/><path class="unhfirttg"/><path class="kr4apibhv"/><path class="r51g0_mcb wm-shine"/><path class="uomh9ebpq wm-deco"/></g>`,
		"fallback": "withicons-sticker:mail-open",
	});
}

export default Component;
