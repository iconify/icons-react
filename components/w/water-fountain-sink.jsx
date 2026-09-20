import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/to9cfjbpm.css';
import '../../css/y/y11tnlbls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="to9cfjbpm"/><path class="y11tnlbls"/></g>`,
		"fallback": "streamline-freehand-color:water-fountain-sink",
	});
}

export default Component;
