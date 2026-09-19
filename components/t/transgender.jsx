import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blju_tb2r.css';

const viewBox = {"width":19,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blju_tb2r"/>`,
		"fallback": "fontisto:transgender",
	});
}

export default Component;
