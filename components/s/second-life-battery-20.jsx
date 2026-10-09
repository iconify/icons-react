import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc00mmbgj.css';
import '../../css/d/d99-61b8w.css';
import '../../css/f/f_st51bya.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc00mmbgj"/><path class="d99-61b8w"/><path class="f_st51bya"/>`,
		"fallback": "energy-icons:second-life-battery-20",
	});
}

export default Component;
