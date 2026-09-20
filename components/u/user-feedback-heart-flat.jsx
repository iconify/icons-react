import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dztbtk77w.css';
import '../../css/w/w3cgejbfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dztbtk77w"/><path class="w3cgejbfk"/></g>`,
		"fallback": "streamline-sharp-color:user-feedback-heart-flat",
	});
}

export default Component;
