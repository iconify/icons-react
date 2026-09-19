import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_30szf3s.css';
import '../../css/m/myoip7bjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_30szf3s"/><path class="myoip7bjv"/>`,
		"fallback": "bx:message-alt-error",
	});
}

export default Component;
