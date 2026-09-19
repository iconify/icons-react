import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz1kzcj3f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz1kzcj3f"/>`,
		"fallback": "fa7-regular:square-plus",
	});
}

export default Component;
