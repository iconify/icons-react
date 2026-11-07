import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by49boidr.css';
import '../../css/n/n96kk3b4d.css';
import '../../css/c/cxn0apbqq.css';
import '../../css/v/v3s8c5bgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by49boidr"/><path class="n96kk3b4d"/><path class="cxn0apbqq"/><path class="v3s8c5bgz"/>`,
		"fallback": "solar:screencast-outline",
	});
}

export default Component;
