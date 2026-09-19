import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6ze7jbwf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6ze7jbwf"/>`,
		"fallback": "fa7-solid:mortar-pestle",
	});
}

export default Component;
