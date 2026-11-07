import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn_frcb-c.css';
import '../../css/x/x28j0bc3o.css';
import '../../css/x/x6pac_euc.css';
import '../../css/v/vy7p6vbgh.css';
import '../../css/l/l427d6b4i.css';
import '../../css/t/t4q46bcno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn_frcb-c"/><path class="x28j0bc3o"/><path class="x6pac_euc"/><path class="vy7p6vbgh"/><path class="l427d6b4i"/><path class="t4q46bcno"/>`,
		"fallback": "solar:scanner-bold-duotone",
	});
}

export default Component;
