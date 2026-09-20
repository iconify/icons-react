import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqogua.css';
import '../../css/t/tr-2c6-rw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqogua"/>`,
		"fallback": "line-md:loading-loop",
	});
}

export default Component;
