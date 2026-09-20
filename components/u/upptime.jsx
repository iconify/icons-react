import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nde_ibbqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nde_ibbqu"/>`,
		"fallback": "thesvg:upptime",
	});
}

export default Component;
