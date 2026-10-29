import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sj9gfcczj.css';
import '../../css/t/th_e4q71e.css';
import '../../css/l/lq53ewc5e.css';
import '../../css/r/rnkiedbvd.css';
import '../../css/z/zgkr20brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sj9gfcczj"/><path class="th_e4q71e wm-k"/><path class="lq53ewc5e wm-a"/><path class="rnkiedbvd wm-k"/><path class="wm-a zgkr20brz"/></g>`,
		"fallback": "withicons:shopping-cart-plus-sketch",
	});
}

export default Component;
