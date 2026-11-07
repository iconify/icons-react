import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6rfy3bcu.css';
import '../../css/a/a1b-yfidj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6rfy3bcu"/><path class="a1b-yfidj"/>`,
		"fallback": "solar:temperature-bold-duotone",
	});
}

export default Component;
