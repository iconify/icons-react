import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en3f2o17m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en3f2o17m"/>`,
		"fallback": "selfhst:rustfs-light",
	});
}

export default Component;
