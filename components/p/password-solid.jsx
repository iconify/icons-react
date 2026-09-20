import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipfz-qbde.css';
import '../../css/l/l0z5z-bqe.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipfz-qbde"/><path clip-rule="evenodd" class="l0z5z-bqe"/>`,
		"fallback": "teenyicons:password-solid",
	});
}

export default Component;
