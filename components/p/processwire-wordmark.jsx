import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta8kr9snh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta8kr9snh"/>`,
		"fallback": "devicon-plain:processwire-wordmark",
	});
}

export default Component;
