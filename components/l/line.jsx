import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lryjw4fpg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lryjw4fpg"/>`,
		"fallback": "fa6-brands:line",
	});
}

export default Component;
