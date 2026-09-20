import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vqq02jbmk.css';
import '../../css/q/qtamdkmsy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vqq02jbmk"/><path class="qtamdkmsy"/></g>`,
		"fallback": "streamline-flex-color:like-1-flat",
	});
}

export default Component;
