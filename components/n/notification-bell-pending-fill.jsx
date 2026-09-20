import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz_le0wpd.css';
import '../../css/e/ewl5wjk4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz_le0wpd"/><path class="ewl5wjk4r"/>`,
		"fallback": "mage:notification-bell-pending-fill",
	});
}

export default Component;
