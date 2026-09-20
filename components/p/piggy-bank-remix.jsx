import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p68vrg86v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p68vrg86v"/>`,
		"fallback": "streamline-flex:piggy-bank-remix",
	});
}

export default Component;
