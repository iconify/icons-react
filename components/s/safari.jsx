import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezijqjblb.css';

const viewBox = {"width":717,"height":778};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezijqjblb"/>`,
		"fallback": "ls:safari",
	});
}

export default Component;
