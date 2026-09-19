import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2g0gnbvv.css';
import '../../css/e/ex8q-3b0r.css';
import '../../css/n/nnce3qmjt.css';
import '../../css/u/u7cnuzgvx.css';
import '../../css/t/t-w6fco6i.css';
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
		"content": `<path class="clr-i-solid--alerted clr-i-solid-path-1--alerted g2g0gnbvv"/><path class="clr-i-solid--alerted clr-i-solid-path-2--alerted ex8q-3b0r"/><path class="clr-i-solid--alerted clr-i-solid-path-3--alerted nnce3qmjt"/><path class="clr-i-solid--alerted clr-i-solid-path-4--alerted u7cnuzgvx"/><path class="clr-i-solid--alerted clr-i-solid-path-5--alerted t-w6fco6i"/><path class="clr-i-alert clr-i-solid--alerted clr-i-solid-path-6--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:users-solid-alerted",
	});
}

export default Component;
