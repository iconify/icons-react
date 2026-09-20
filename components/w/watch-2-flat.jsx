import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/unzhaxboy.css';
import '../../css/m/mki5ph15o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="unzhaxboy"/><path class="mki5ph15o"/></g>`,
		"fallback": "streamline-color:watch-2-flat",
	});
}

export default Component;
