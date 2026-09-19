import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4iyz2z_d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4iyz2z_d"/>`,
		"fallback": "icomoon-free:reply",
	});
}

export default Component;
