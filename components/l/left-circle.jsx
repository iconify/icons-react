import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiz2zc2mh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiz2zc2mh"/>`,
		"fallback": "uiw:left-circle",
	});
}

export default Component;
