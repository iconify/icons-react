import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc10j4kob.css';
import '../../css/t/tw4lkvbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc10j4kob"/><path class="tw4lkvbiq"/>`,
		"fallback": "basil:microphone-solid",
	});
}

export default Component;
