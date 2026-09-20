import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnxcg4bxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnxcg4bxl"/>`,
		"fallback": "simple-icons:swiggy",
	});
}

export default Component;
