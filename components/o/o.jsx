import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez447-bmb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez447-bmb"/>`,
		"fallback": "fa7-solid:o",
	});
}

export default Component;
