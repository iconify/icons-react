import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl9d9xb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl9d9xb4u"/>`,
		"fallback": "cbi:model-x-open",
	});
}

export default Component;
