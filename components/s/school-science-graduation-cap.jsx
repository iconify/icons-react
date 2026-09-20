import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph7wbnb1k.css';
import '../../css/o/oxriyzb9j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph7wbnb1k"/><path class="oxriyzb9j"/>`,
		"fallback": "streamline-pixel:school-science-graduation-cap",
	});
}

export default Component;
