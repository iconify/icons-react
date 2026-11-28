import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cskt0qfga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cskt0qfga"/>`,
		"fallback": "iconaut:sd-card-solid",
	});
}

export default Component;
