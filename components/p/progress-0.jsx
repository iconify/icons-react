import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upr5s1btc.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upr5s1btc"/>`,
		"fallback": "websymbol:progress-0",
	});
}

export default Component;
