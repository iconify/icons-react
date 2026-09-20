import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqykbbfle.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqykbbfle"/>`,
		"fallback": "uiw:usergroup-add",
	});
}

export default Component;
