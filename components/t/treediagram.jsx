import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj-au7bqr.css';

const viewBox = {"width":960,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj-au7bqr"/>`,
		"fallback": "whh:treediagram",
	});
}

export default Component;
