import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob3a4tbxx.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob3a4tbxx"/>`,
		"fallback": "jam:mic-f",
	});
}

export default Component;
