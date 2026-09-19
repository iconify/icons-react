import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5e08jbsb.css';
import '../../css/n/nwffqwsqj.css';
import '../../css/a/aexi2q7dr.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5e08jbsb"/><path class="nwffqwsqj"/><path class="aexi2q7dr"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:internet-of-things-line",
	});
}

export default Component;
