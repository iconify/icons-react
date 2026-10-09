import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srxxy_b0g.css';
import '../../css/b/b9waewb1w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srxxy_b0g"/><path class="b9waewb1w"/>`,
		"fallback": "energy-icons:sunrise-48-bold",
	});
}

export default Component;
