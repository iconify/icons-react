import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2reb_1-b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2reb_1-b"/>`,
		"fallback": "ep:iphone",
	});
}

export default Component;
