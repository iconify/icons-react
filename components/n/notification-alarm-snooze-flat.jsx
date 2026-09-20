import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d004qqbjy.css';
import '../../css/h/h5jgtgbno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="d004qqbjy"/><path class="h5jgtgbno"/></g>`,
		"fallback": "streamline-sharp-color:notification-alarm-snooze-flat",
	});
}

export default Component;
