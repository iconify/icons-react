import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_09lpp9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_09lpp9m"/>`,
		"fallback": "noviair:pin",
	});
}

export default Component;
