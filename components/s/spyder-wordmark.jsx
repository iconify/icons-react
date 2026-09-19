import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8mtlxpmv.css';
import '../../css/a/a-zj5lbdq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8mtlxpmv"/><path class="a-zj5lbdq b"/>`,
		"fallback": "devicon:spyder-wordmark",
	});
}

export default Component;
