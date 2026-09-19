import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nveaw9mgu.css';

const viewBox = {"width":424,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nveaw9mgu"/>`,
		"fallback": "zmdi:spinner",
	});
}

export default Component;
