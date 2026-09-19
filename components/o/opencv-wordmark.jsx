import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulipixb_y.css';
import '../../css/c/cl9z5d_3w.css';
import '../../css/h/hsahbabwh.css';
import '../../css/a/aizck2ejj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulipixb_y"/><path class="cl9z5d_3w"/><path class="hsahbabwh"/><path class="aizck2ejj"/>`,
		"fallback": "devicon:opencv-wordmark",
	});
}

export default Component;
