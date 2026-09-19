import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrct9ezjq.css';
import '../../css/k/k9gvrkmhy.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 mrct9ezjq"/><path class="clr-i-outline clr-i-outline-path-2 k9gvrkmhy"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:text-line",
	});
}

export default Component;
