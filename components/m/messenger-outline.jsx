import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iak_x3heq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iak_x3heq"/>`,
		"fallback": "teenyicons:messenger-outline",
	});
}

export default Component;
