import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uymhvmb1p.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uymhvmb1p"/>`,
		"fallback": "wi:night-thunderstorm",
	});
}

export default Component;
