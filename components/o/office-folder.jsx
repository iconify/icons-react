import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/ql59iqbnu.css';
import '../../css/x/x207j0b5s.css';
import '../../css/g/gdgyiqj9v.css';
import '../../css/q/qnwvedb8u.css';
import '../../css/p/p7wwu3o2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ql59iqbnu"/><path class="x207j0b5s"/><path class="gdgyiqj9v"/><path class="qnwvedb8u"/><path class="p7wwu3o2n"/></g>`,
		"fallback": "streamline-freehand-color:office-folder",
	});
}

export default Component;
