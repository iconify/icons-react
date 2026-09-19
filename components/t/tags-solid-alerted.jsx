import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0rq71e6h.css';
import '../../css/v/vk3_t0hpz.css';
import '../../css/f/fuo0uab3h.css';
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
		"content": `<path class="clr-i-solid--alerted clr-i-solid-path-1--alerted o0rq71e6h"/><path class="clr-i-solid--alerted clr-i-solid-path-2--alerted vk3_t0hpz"/><path class="clr-i-solid--alerted clr-i-solid-path-3--alerted fuo0uab3h"/><path class="clr-i-alert clr-i-solid--alerted clr-i-solid-path-4--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:tags-solid-alerted",
	});
}

export default Component;
