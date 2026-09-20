import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-w6i4z_i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-w6i4z_i"/>`,
		"fallback": "selfhst:librephotos-light",
	});
}

export default Component;
