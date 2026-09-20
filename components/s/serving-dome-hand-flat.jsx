import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o1kq1aciu.css';
import '../../css/w/w--izp3di.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o1kq1aciu"/><path class="w--izp3di"/></g>`,
		"fallback": "streamline-flex-color:serving-dome-hand-flat",
	});
}

export default Component;
