import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv4wotbsh.css';
import '../../css/b/b133qtshg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv4wotbsh"/><path class="b133qtshg"/>`,
		"fallback": "solar:notification-unread-bold-duotone",
	});
}

export default Component;
