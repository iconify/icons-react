import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj9_xabvy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj9_xabvy"/>`,
		"fallback": "selfhst:npr-one-light",
	});
}

export default Component;
