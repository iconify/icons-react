import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb5j1aciy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb5j1aciy"/>`,
		"fallback": "cbi:pool-filter",
	});
}

export default Component;
