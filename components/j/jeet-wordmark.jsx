import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjid91ngn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjid91ngn"/>`,
		"fallback": "devicon-plain:jeet-wordmark",
	});
}

export default Component;
