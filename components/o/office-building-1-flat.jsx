import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k16w0ridj.css';
import '../../css/b/bp-xm5bjw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k16w0ridj"/><path class="bp-xm5bjw"/></g>`,
		"fallback": "streamline-color:office-building-1-flat",
	});
}

export default Component;
