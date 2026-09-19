import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj1lpsbel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj1lpsbel"/>`,
		"fallback": "cbi:shell-recharge",
	});
}

export default Component;
