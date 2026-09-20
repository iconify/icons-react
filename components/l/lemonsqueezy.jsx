import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdq919bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdq919bih"/>`,
		"fallback": "simple-icons:lemonsqueezy",
	});
}

export default Component;
