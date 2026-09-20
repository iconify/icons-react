import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lra8npb0u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lra8npb0u"/>`,
		"fallback": "sidekickicons:shield-20-solid",
	});
}

export default Component;
