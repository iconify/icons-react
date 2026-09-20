import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftiydmqsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftiydmqsw"/>`,
		"fallback": "thesvg-color:matterdotjs",
	});
}

export default Component;
