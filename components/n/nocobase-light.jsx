import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py4unwgmu.css';
import '../../css/a/aqlii8bun.css';

const viewBox = {"width":100,"height":87.197};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py4unwgmu"/><path class="aqlii8bun"/>`,
		"fallback": "thesvg-color:nocobase-light",
	});
}

export default Component;
