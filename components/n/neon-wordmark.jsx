import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/not8szbsj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="not8szbsj"/>`,
		"fallback": "devicon-plain:neon-wordmark",
	});
}

export default Component;
