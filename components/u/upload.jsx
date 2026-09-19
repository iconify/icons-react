import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilyn7bcgi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilyn7bcgi"/>`,
		"fallback": "ps:upload",
	});
}

export default Component;
