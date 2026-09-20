import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o4rhn6bif.css';
import '../../css/e/eoue8bc1l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o4rhn6bif"/><path class="eoue8bc1l"/></g>`,
		"fallback": "streamline-flex-color:notification-alarm-snooze-flat",
	});
}

export default Component;
