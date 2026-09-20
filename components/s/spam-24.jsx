import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5q3lq8lz.css';
import '../../css/o/or-r2ccaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5q3lq8lz"/><path clip-rule="evenodd" class="or-r2ccaz"/>`,
		"fallback": "qlementine-icons:spam-24",
	});
}

export default Component;
