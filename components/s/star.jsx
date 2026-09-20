import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm3x0j_xe.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm3x0j_xe"/>`,
		"fallback": "wpf:star",
	});
}

export default Component;
