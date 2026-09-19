import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg3ptdbld.css';

const viewBox = {"width":717,"height":662};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg3ptdbld"/>`,
		"fallback": "ls:paint",
	});
}

export default Component;
