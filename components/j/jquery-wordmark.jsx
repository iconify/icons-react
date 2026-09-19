import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy1qvyszu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy1qvyszu"/>`,
		"fallback": "devicon-plain:jquery-wordmark",
	});
}

export default Component;
