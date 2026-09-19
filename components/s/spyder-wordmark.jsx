import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy64nx-nc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy64nx-nc"/>`,
		"fallback": "devicon-plain:spyder-wordmark",
	});
}

export default Component;
