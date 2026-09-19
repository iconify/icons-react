import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k83n91jcv.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k83n91jcv"/>`,
		"fallback": "whh:sharetronix",
	});
}

export default Component;
