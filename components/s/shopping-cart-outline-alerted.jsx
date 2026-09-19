import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc1nhbbxc.css';
import '../../css/j/j3zfux-3r.css';
import '../../css/a/a4p-_ubzv.css';
import '../../css/l/lgo1qqmpg.css';
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
		"content": `<circle class="clr-i-outline--alerted clr-i-outline-path-1--alerted uc1nhbbxc"/><circle class="clr-i-outline--alerted clr-i-outline-path-2--alerted j3zfux-3r"/><path class="a4p-_ubzv clr-i-outline--alerted clr-i-outline-path-3--alerted"/><path class="clr-i-outline--alerted clr-i-outline-path-4--alerted lgo1qqmpg"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-5--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:shopping-cart-outline-alerted",
	});
}

export default Component;
