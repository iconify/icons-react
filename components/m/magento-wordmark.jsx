import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk-q5i3tl.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk-q5i3tl"/>`,
		"fallback": "devicon-plain:magento-wordmark",
	});
}

export default Component;
