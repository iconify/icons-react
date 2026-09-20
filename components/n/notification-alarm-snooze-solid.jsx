import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud109lbcj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ud109lbcj"/>`,
		"fallback": "streamline-plump:notification-alarm-snooze-solid",
	});
}

export default Component;
