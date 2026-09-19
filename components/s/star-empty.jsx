import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv4q92b1l.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv4q92b1l"/>`,
		"fallback": "el:star-empty",
	});
}

export default Component;
