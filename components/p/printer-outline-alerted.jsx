import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6vy5dbmt.css';
import '../../css/f/feq4xhlas.css';
import '../../css/c/c40usccxk.css';
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
		"content": `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted d6vy5dbmt"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted feq4xhlas"/><path class="c40usccxk clr-i-outline--alerted clr-i-outline-path-3--alerted"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-4--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:printer-outline-alerted",
	});
}

export default Component;
