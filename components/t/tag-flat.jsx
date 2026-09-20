import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zd0vtsbuf.css';
import '../../css/g/gv7wpe6ub.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zd0vtsbuf"/><path class="gv7wpe6ub"/></g>`,
		"fallback": "streamline-flex-color:tag-flat",
	});
}

export default Component;
