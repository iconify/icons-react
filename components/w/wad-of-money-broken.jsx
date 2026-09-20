import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xlmqkwltw.css';
import '../../css/l/lfgjsbbbx.css';
import '../../css/t/tloly4b5q.css';
import '../../css/p/p8dszccnh.css';
import '../../css/q/qrtoedc3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xlmqkwltw"/><path class="lfgjsbbbx"/><path class="tloly4b5q"/><path class="p8dszccnh"/><path class="qrtoedc3h"/></g>`,
		"fallback": "solar:wad-of-money-broken",
	});
}

export default Component;
