import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhi9wsb5v.css';

const viewBox = {"width":1003,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhi9wsb5v"/>`,
		"fallback": "websymbol:twitter-bird",
	});
}

export default Component;
