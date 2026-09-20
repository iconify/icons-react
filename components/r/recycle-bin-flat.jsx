import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c6knfkbeo.css';
import '../../css/w/www6z1fcc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c6knfkbeo"/><path class="www6z1fcc"/></g>`,
		"fallback": "streamline-flex-color:recycle-bin-flat",
	});
}

export default Component;
