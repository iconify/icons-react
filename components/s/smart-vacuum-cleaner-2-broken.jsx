import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m7ukxtbvq.css';
import '../../css/x/xv6kuw8hw.css';
import '../../css/l/ltt5oydcb.css';
import '../../css/g/gyvy_bjrp.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m7ukxtbvq"/><path class="xv6kuw8hw"/><path class="ltt5oydcb"/><path class="gyvy_bjrp"/><path class="ko6o-6b9b"/></g>`,
		"fallback": "solar:smart-vacuum-cleaner-2-broken",
	});
}

export default Component;
