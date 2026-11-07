import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wbicn6byt.css';
import '../../css/x/xk8carhdz.css';
import '../../css/a/al7cw8y0q.css';
import '../../css/d/d9cgzhbuf.css';
import '../../css/s/sdzmkabql.css';
import '../../css/w/wzjs11h7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wbicn6byt"/><path class="xk8carhdz"/><path class="al7cw8y0q"/><path class="d9cgzhbuf"/><path class="sdzmkabql"/><path class="wzjs11h7j"/></g>`,
		"fallback": "solar:jar-of-pills-2-broken",
	});
}

export default Component;
