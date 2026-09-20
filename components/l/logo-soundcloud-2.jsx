import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhxtm0v3c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhxtm0v3c"/>`,
		"fallback": "streamline-pixel:logo-soundcloud-2",
	});
}

export default Component;
