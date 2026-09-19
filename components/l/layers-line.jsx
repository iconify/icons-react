import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvsxqn9yz.css';
import '../../css/r/r6h-a0bkr.css';
import '../../css/s/s-bn8xbic.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 yvsxqn9yz"/><path class="clr-i-outline clr-i-outline-path-2 r6h-a0bkr"/><path class="clr-i-outline clr-i-outline-path-3 s-bn8xbic"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:layers-line",
	});
}

export default Component;
