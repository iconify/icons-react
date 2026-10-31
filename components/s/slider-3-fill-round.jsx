import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh_6htbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh_6htbue"/>`,
		"fallback": "coolicons:slider-3-fill-round",
	});
}

export default Component;
