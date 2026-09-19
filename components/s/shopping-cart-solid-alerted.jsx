import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bget78m-c.css';
import '../../css/n/nn2o84f1c.css';
import '../../css/y/y1oakabnv.css';
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
		"content": `<circle class="bget78m-c clr-i-solid--alerted clr-i-solid-path-1--alerted"/><circle class="clr-i-solid--alerted clr-i-solid-path-2--alerted nn2o84f1c"/><path class="clr-i-solid--alerted clr-i-solid-path-3--alerted y1oakabnv"/><path class="clr-i-alert clr-i-solid--alerted clr-i-solid-path-4--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:shopping-cart-solid-alerted",
	});
}

export default Component;
