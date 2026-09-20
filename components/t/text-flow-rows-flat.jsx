import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z23be8bem.css';
import '../../css/n/n08go3bko.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="z23be8bem"/><path class="n08go3bko"/></g>`,
		"fallback": "streamline-color:text-flow-rows-flat",
	});
}

export default Component;
