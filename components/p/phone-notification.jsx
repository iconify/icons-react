import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln16226oo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln16226oo"/>`,
		"fallback": "streamline-flex:phone-notification",
	});
}

export default Component;
