import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co93ein0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co93ein0j"/>`,
		"fallback": "mdi:scale-off",
	});
}

export default Component;
