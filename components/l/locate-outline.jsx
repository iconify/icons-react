import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f43p7lhjp.css';
import '../../css/l/lbpp58r_m.css';
import '../../css/d/dc686_elh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f43p7lhjp"/><path class="lbpp58r_m"/><path class="dc686_elh"/>`,
		"fallback": "ion:locate-outline",
	});
}

export default Component;
