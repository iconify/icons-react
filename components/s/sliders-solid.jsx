import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkf8rzb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkf8rzb6j"/>`,
		"fallback": "withicons:sliders-solid",
	});
}

export default Component;
