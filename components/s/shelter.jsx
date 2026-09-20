import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpu8jptvj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpu8jptvj"/>`,
		"fallback": "pinhead:shelter",
	});
}

export default Component;
