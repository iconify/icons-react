import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5h4oig5j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g5h4oig5j"/>`,
		"fallback": "streamline-flex:notification-alarm-snooze-remix",
	});
}

export default Component;
