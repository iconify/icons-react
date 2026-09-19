import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os7puxbrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b os7puxbrg"/>`,
		"fallback": "boxicons:reading-glass",
	});
}

export default Component;
