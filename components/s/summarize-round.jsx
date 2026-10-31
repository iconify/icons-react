import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv7e3w10i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv7e3w10i"/>`,
		"fallback": "coolicons:summarize-round",
	});
}

export default Component;
