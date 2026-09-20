import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od3nh1bhn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od3nh1bhn"/>`,
		"fallback": "selfhst:operational-dark",
	});
}

export default Component;
