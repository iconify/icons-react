import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3wpccc3y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3wpccc3y"/>`,
		"fallback": "streamline-pixel:logo-spotify",
	});
}

export default Component;
