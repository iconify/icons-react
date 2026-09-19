import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puv6w158o.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puv6w158o"/>`,
		"fallback": "devicon-plain:replit-wordmark",
	});
}

export default Component;
