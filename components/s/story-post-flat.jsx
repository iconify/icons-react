import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mvz8xubtm.css';
import '../../css/q/qe-56jg3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mvz8xubtm"/><path class="qe-56jg3t"/></g>`,
		"fallback": "streamline-sharp-color:story-post-flat",
	});
}

export default Component;
