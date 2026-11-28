import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9og_8wkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9og_8wkb primary"/>`,
		"fallback": "iconaut:link-duotone",
	});
}

export default Component;
