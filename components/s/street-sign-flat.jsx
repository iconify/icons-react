import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e6mrysbdb.css';
import '../../css/k/kno1gzb9a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="e6mrysbdb"/><path class="kno1gzb9a"/></g>`,
		"fallback": "streamline-color:street-sign-flat",
	});
}

export default Component;
