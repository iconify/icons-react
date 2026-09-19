import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj77lc-6d.css';
import '../../css/e/e0nkev_-m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj77lc-6d"/><path class="e0nkev_-m"/>`,
		"fallback": "devicon:trpc-wordmark",
	});
}

export default Component;
