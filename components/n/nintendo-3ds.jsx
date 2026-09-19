import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbcfpcb3g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbcfpcb3g"/>`,
		"fallback": "cib:nintendo-3ds",
	});
}

export default Component;
