import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0ytxmoyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0ytxmoyv"/>`,
		"fallback": "thesvg-color:rich",
	});
}

export default Component;
