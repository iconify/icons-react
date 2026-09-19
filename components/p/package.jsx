import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t674u3-7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t674u3-7k"/>`,
		"fallback": "hugeicons:package",
	});
}

export default Component;
