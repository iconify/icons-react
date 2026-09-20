import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yvhx1nbuq.css';
import '../../css/r/rnv9kjpkl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yvhx1nbuq"/><path class="rnv9kjpkl"/></g>`,
		"fallback": "streamline-plump-color:sun-flat",
	});
}

export default Component;
