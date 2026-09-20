import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wpdy7_m7a.css';
import '../../css/c/c585gybuh.css';
import '../../css/p/pyalcp8zz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wpdy7_m7a"/><path class="c585gybuh"/><path class="pyalcp8zz"/></g>`,
		"fallback": "streamline-color:pork-meat-flat",
	});
}

export default Component;
