import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzm86-1vs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzm86-1vs"/>`,
		"fallback": "selfhst:lyft-dark",
	});
}

export default Component;
