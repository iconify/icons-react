import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2zodh4mf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2zodh4mf"/>`,
		"fallback": "boxicons:shield-alt-2",
	});
}

export default Component;
