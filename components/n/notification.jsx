import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smsq4b2xo.css';
import '../../css/a/amoelnz9r.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smsq4b2xo"/><path class="amoelnz9r"/>`,
		"fallback": "ep:notification",
	});
}

export default Component;
