import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3dt8sb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3dt8sb6x"/>`,
		"fallback": "coolicons:martini-fill-round",
	});
}

export default Component;
