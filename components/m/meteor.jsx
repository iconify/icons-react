import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozm9twbis.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozm9twbis"/>`,
		"fallback": "fa7-solid:meteor",
	});
}

export default Component;
