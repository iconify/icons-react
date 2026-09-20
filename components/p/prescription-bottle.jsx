import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb3bc7b8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb3bc7b8f"/>`,
		"fallback": "uil:prescription-bottle",
	});
}

export default Component;
