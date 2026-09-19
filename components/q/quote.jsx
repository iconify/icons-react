import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teo9tmjwu.css';

const viewBox = {"width":717,"height":627};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teo9tmjwu"/>`,
		"fallback": "ls:quote",
	});
}

export default Component;
