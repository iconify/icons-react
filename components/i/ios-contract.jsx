import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2_axxtyj.css';
import '../../css/l/le9wl1t5r.css';
import '../../css/h/how4y_5ly.css';
import '../../css/x/xyb0mqbel.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2_axxtyj"/><path class="le9wl1t5r"/><path class="how4y_5ly"/><path class="xyb0mqbel"/>`,
		"fallback": "ion:ios-contract",
	});
}

export default Component;
