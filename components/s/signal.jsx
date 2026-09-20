import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjo5syb6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjo5syb6k"/>`,
		"fallback": "lucide:signal",
	});
}

export default Component;
