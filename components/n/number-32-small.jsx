import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdf92kcro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdf92kcro"/>`,
		"fallback": "tabler:number-32-small",
	});
}

export default Component;
