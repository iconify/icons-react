import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj66m2cnr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj66m2cnr"/>`,
		"fallback": "devicon-plain:spring-wordmark",
	});
}

export default Component;
