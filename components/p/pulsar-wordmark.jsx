import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn-nx3irz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn-nx3irz"/>`,
		"fallback": "devicon:pulsar-wordmark",
	});
}

export default Component;
