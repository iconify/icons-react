import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj3jhzbpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj3jhzbpf"/>`,
		"fallback": "streamline-logos:stumble-upon-2ing-logo",
	});
}

export default Component;
