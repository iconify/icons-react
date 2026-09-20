import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkpplc3oo.css';
import '../../css/m/mbgl0xb_o.css';
import '../../css/e/eg0azubuo.css';
import '../../css/k/kz_b-it7y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkpplc3oo"/><path class="mbgl0xb_o"/><path class="eg0azubuo"/><path class="kz_b-it7y"/>`,
		"fallback": "thesvg:phalcon",
	});
}

export default Component;
