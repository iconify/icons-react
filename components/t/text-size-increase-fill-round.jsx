import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w42mnbcwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w42mnbcwf"/>`,
		"fallback": "coolicons:text-size-increase-fill-round",
	});
}

export default Component;
