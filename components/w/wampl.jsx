import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/koi-z9b7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="koi-z9b7e"/>`,
		"fallback": "token:wampl",
	});
}

export default Component;
