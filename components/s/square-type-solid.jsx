import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkxm46j1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkxm46j1d"/>`,
		"fallback": "iconaut:square-type-solid",
	});
}

export default Component;
