import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrr1f-bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrr1f-bfc"/>`,
		"fallback": "noviair:star-plus",
	});
}

export default Component;
