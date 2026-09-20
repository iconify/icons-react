import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s88m1dw2h.css';
import '../../css/r/rymzj_w6f.css';
import '../../css/h/hzqb1s7ax.css';
import '../../css/c/cothx-xat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s88m1dw2h"/><path class="rymzj_w6f"/><path class="hzqb1s7ax"/><path class="cothx-xat"/>`,
		"fallback": "uim:user-arrows",
	});
}

export default Component;
