import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzve063hy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzve063hy"/>`,
		"fallback": "teenyicons:snapchat-outline",
	});
}

export default Component;
