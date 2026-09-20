import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ty9rd6b5j.css';
import '../../css/v/v2wn-3obv.css';
import '../../css/s/su98nkraq.css';
import '../../css/y/ys8y3_bxd.css';
import '../../css/m/mah477b0j.css';
import '../../css/g/gkkj-ubvu.css';
import '../../css/y/yqtwibc4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ty9rd6b5j"/><path class="v2wn-3obv"/><path class="su98nkraq"/><path class="ys8y3_bxd"/><path class="mah477b0j"/><path class="gkkj-ubvu"/><path clip-rule="evenodd" class="yqtwibc4o"/></g>`,
		"fallback": "solar:subtitles-outline",
	});
}

export default Component;
