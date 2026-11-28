import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufl8c1dfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufl8c1dfv"/>`,
		"fallback": "noviair:undo",
	});
}

export default Component;
