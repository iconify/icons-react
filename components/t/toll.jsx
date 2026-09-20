import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j20ot3geh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j20ot3geh"/>`,
		"fallback": "simple-icons:toll",
	});
}

export default Component;
