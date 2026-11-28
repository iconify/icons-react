import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cya9mgwew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cya9mgwew primary"/>`,
		"fallback": "iconaut:navigation-duotone",
	});
}

export default Component;
