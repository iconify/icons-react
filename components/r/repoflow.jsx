import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faekp9bkh.css';
import '../../css/r/ry8otvb5y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="faekp9bkh"/><path class="ry8otvb5y"/>`,
		"fallback": "selfhst:repoflow",
	});
}

export default Component;
