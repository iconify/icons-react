import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0jsy2bsu.css';
import '../../css/t/t3y7hc53e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0jsy2bsu"/><path class="t3y7hc53e"/>`,
		"fallback": "selfhst:pequeroku",
	});
}

export default Component;
