import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8cdc8b8v.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8cdc8b8v"/>`,
		"fallback": "devicon-plain:pm2-wordmark",
	});
}

export default Component;
