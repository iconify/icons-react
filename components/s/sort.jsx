import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue-8jkbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue-8jkbmb"/>`,
		"fallback": "prime:sort",
	});
}

export default Component;
