import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqfn-ipyo.css';

const viewBox = {"width":1158.764,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqfn-ipyo"/>`,
		"fallback": "brandico:vimeo",
	});
}

export default Component;
