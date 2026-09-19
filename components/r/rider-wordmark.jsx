import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx7hojf8p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx7hojf8p"/>`,
		"fallback": "devicon-plain:rider-wordmark",
	});
}

export default Component;
