import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asqh4ebny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asqh4ebny"/>`,
		"fallback": "thesvg-color:seagate",
	});
}

export default Component;
