import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upelnybhu.css';
import '../../css/g/g98mmptrb.css';
import '../../css/c/c59m8zuqm.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 upelnybhu"/><path class="clr-i-outline clr-i-outline-path-2 g98mmptrb"/><path class="c59m8zuqm clr-i-outline clr-i-outline-path-3"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:picture-line",
	});
}

export default Component;
