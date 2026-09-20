import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svkmrqn0y.css';
import '../../css/k/kybo6ib7m.css';
import '../../css/g/gbl_k3bbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svkmrqn0y"/><path class="kybo6ib7m"/><path class="gbl_k3bbe"/>`,
		"fallback": "stash:user-id-duotone",
	});
}

export default Component;
