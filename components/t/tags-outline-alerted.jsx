import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqjikdywo.css';
import '../../css/v/vc_m5vbqz.css';
import '../../css/o/o0rq71e6h.css';
import '../../css/v/vk3_t0hpz.css';
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
		"content": `<circle class="clr-i-outline--alerted clr-i-outline-path-1--alerted rqjikdywo"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted vc_m5vbqz"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted o0rq71e6h"/><path class="clr-i-outline--alerted clr-i-outline-path-4--alerted vk3_t0hpz"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-5--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:tags-outline-alerted",
	});
}

export default Component;
