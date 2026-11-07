import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1jmd4bmi.css';
import '../../css/h/haze59b4w.css';
import '../../css/z/zyijgil5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s1jmd4bmi"/><path class="haze59b4w"/><path class="zyijgil5y"/>`,
		"fallback": "solar:posts-carousel-horizontal-outline",
	});
}

export default Component;
