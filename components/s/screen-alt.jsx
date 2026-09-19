import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwih3-_ho.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwih3-_ho"/>`,
		"fallback": "el:screen-alt",
	});
}

export default Component;
