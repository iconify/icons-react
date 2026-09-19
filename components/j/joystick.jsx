import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arg7gzb5i.css';
import '../../css/q/quqfatciu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arg7gzb5i"/><path class="quqfatciu"/>`,
		"fallback": "boxicons:joystick",
	});
}

export default Component;
