import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca-7h_wwy.css';

const viewBox = {"width":771,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca-7h_wwy"/>`,
		"fallback": "whh:podium",
	});
}

export default Component;
