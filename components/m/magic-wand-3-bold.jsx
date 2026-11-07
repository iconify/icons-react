import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe050eb3u.css';
import '../../css/x/x8k8-5b4d.css';
import '../../css/z/zw138qb4j.css';
import '../../css/v/vbpdh7-jd.css';
import '../../css/r/ri-4y14ys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe050eb3u"/><path class="x8k8-5b4d"/><path class="zw138qb4j"/><path class="vbpdh7-jd"/><path class="ri-4y14ys"/>`,
		"fallback": "solar:magic-wand-3-bold",
	});
}

export default Component;
