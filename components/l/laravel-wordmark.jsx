import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqrder4yr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqrder4yr"/>`,
		"fallback": "devicon:laravel-wordmark",
	});
}

export default Component;
