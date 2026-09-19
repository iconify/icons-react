import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv6on_quq.css';
import '../../css/w/wathkcbkj.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted vv6on_quq"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted wathkcbkj"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-3--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:storage-outline-alerted",
	});
}

export default Component;
