import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6v803isl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6v803isl"/>`,
		"fallback": "thesvg-color:tor-project",
	});
}

export default Component;
