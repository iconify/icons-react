import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k73nz6b7k.css';
import '../../css/r/r5mq_bbez.css';
import '../../css/z/zqmwupo5u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k73nz6b7k"/><path class="r5mq_bbez"/><path class="zqmwupo5u"/></g>`,
		"fallback": "streamline-color:politics-compaign-flat",
	});
}

export default Component;
