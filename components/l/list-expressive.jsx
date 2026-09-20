import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6u543atc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6u543atc"/>`,
		"fallback": "nrk:list-expressive",
	});
}

export default Component;
