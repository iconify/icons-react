import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzj3t6uud.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzj3t6uud"/>`,
		"fallback": "icomoon-free:spinner2",
	});
}

export default Component;
