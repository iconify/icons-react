import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqg26ys5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqg26ys5y"/>`,
		"fallback": "boxicons:integral-filled",
	});
}

export default Component;
