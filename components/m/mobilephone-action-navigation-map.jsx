import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jo4_ysnid.css';
import '../../css/w/wpzxk1bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jo4_ysnid"/><path class="wpzxk1bvg"/></g>`,
		"fallback": "streamline-freehand-color:mobilephone-action-navigation-map",
	});
}

export default Component;
