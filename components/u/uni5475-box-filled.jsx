import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpjd-ub0o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpjd-ub0o"/>`,
		"fallback": "dinkie-icons:uni5475-box-filled",
	});
}

export default Component;
