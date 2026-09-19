import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcj8v3szg.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcj8v3szg"/>`,
		"fallback": "whh:phonescreensize",
	});
}

export default Component;
