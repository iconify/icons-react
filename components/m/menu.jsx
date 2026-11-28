import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un_p-dbfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un_p-dbfu"/>`,
		"fallback": "noviair-light:menu",
	});
}

export default Component;
