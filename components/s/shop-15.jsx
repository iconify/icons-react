import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kad0u6noq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kad0u6noq"/>`,
		"fallback": "maki:shop-15",
	});
}

export default Component;
