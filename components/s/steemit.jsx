import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td5yvf_el.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td5yvf_el"/>`,
		"fallback": "thesvg-color:steemit",
	});
}

export default Component;
