import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyh_xjbzw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyh_xjbzw"/>`,
		"fallback": "catppuccin:odin",
	});
}

export default Component;
