import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loxnei52m.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loxnei52m"/>`,
		"fallback": "fa7-solid:temperature-three-quarters",
	});
}

export default Component;
