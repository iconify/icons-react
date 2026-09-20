import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwwxjabsc.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-7.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwwxjabsc"/>`,
		"fallback": "jam:soundcloud",
	});
}

export default Component;
