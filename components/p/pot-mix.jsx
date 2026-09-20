import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uox0lkpfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uox0lkpfj"/>`,
		"fallback": "mdi:pot-mix",
	});
}

export default Component;
