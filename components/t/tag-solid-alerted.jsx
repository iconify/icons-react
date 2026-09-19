import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6s07kb3g.css';
import '../../css/g/gxgjm0bba.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid--alerted clr-i-solid-path-1--alerted q6s07kb3g"/><path class="clr-i-alert clr-i-solid--alerted clr-i-solid-path-2--alerted gxgjm0bba"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:tag-solid-alerted",
	});
}

export default Component;
