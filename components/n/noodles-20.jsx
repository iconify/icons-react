import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa0mk_bnl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa0mk_bnl"/>`,
		"fallback": "energy-icons:noodles-20",
	});
}

export default Component;
