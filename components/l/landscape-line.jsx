import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9snz0bpr.css';
import '../../css/p/pzg9scbqe.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 p9snz0bpr"/><path class="clr-i-outline clr-i-outline-path-2 pzg9scbqe"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:landscape-line",
	});
}

export default Component;
