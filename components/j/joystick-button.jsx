import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbvbi9oey.css';
import '../../css/l/lp7eaq79j.css';
import '../../css/n/n1xy6nh9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbvbi9oey"/><path class="lp7eaq79j"/><circle class="n1xy6nh9u"/>`,
		"fallback": "bx:joystick-button",
	});
}

export default Component;
