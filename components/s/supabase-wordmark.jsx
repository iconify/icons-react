import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxj0m6wlx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxj0m6wlx"/>`,
		"fallback": "devicon-plain:supabase-wordmark",
	});
}

export default Component;
