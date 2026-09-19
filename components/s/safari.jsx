import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v99i_8brn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v99i_8brn"/>`,
		"fallback": "fa7-brands:safari",
	});
}

export default Component;
