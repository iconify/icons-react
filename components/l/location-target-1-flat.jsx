import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y8itoxbys.css';
import '../../css/u/u0aqaukov.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y8itoxbys"/><path class="u0aqaukov"/></g>`,
		"fallback": "streamline-color:location-target-1-flat",
	});
}

export default Component;
