import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgklwys6s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgklwys6s"/>`,
		"fallback": "teenyicons:unlock-small-outline",
	});
}

export default Component;
