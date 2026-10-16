import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
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
		"content": `<g class="n1mjunbsu"><path class="py4unwgmu"/><path class="aqlii8bun"/></g>`,
		"fallback": "thesvg-color:nocobase-dark",
	});
}

export default Component;
