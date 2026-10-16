import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3bu2g2no.css';
import '../../css/i/iyhbzwb_j.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3bu2g2no"/><path class="iyhbzwb_j"/><path class="yfoxxnbix"/>`,
		"fallback": "energy-icons:vertical-solar-20-bold",
	});
}

export default Component;
