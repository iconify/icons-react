import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/clvcixble.css';
import '../../css/f/f5j0s6m9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="clvcixble"/><path class="f5j0s6m9k"/></g>`,
		"fallback": "streamline-sharp-color:snooze-clock-flat",
	});
}

export default Component;
