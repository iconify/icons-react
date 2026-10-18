import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yumz50bwm.css';
import '../../css/f/fu_1axbuk.css';
import '../../css/w/wd-cb2baj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yumz50bwm"/><path class="fu_1axbuk"/><path class="wd-cb2baj"/>`,
		"fallback": "energy-icons:waste-to-energy-20",
	});
}

export default Component;
