import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2ceaklkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2ceaklkd"/>`,
		"fallback": "coolicons:layers-fill-round",
	});
}

export default Component;
