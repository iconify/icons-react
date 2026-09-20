import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtuynmb0p.css';
import '../../css/g/ggq26fb1j.css';
import '../../css/i/i79gkzbce.css';
import '../../css/r/rk9p1tbyk.css';
import '../../css/s/scb2aub2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtuynmb0p"/><path class="ggq26fb1j"/><circle class="i79gkzbce"/><path class="rk9p1tbyk"/><path class="scb2aub2w"/>`,
		"fallback": "uim:sanitizer",
	});
}

export default Component;
