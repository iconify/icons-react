import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9uwov.css';
import '../../css/s/so-from-62.css';
import '../../css/t/tr-b5mmly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9uwov"/>`,
		"fallback": "line-md:phone-loop",
	});
}

export default Component;
