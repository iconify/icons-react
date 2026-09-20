import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ak298ni-i.css';
import '../../css/x/xu1hxdbwb.css';
import '../../css/e/e1kbs5w7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ak298ni-i"/><path class="xu1hxdbwb"/><path class="e1kbs5w7c"/></g>`,
		"fallback": "streamline-freehand-color:shopping-bag-no-plastic",
	});
}

export default Component;
