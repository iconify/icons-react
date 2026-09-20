import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmf4p5-5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmf4p5-5i"/>`,
		"fallback": "mage:trophy-up-fill",
	});
}

export default Component;
