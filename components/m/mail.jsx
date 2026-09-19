import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3yk7pb8w.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3yk7pb8w"/>`,
		"fallback": "foundation:mail",
	});
}

export default Component;
