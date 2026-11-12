import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s68z_rb1l.css';
import '../../css/r/rdd8ibbkh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s68z_rb1l"/><path class="rdd8ibbkh"/>`,
		"fallback": "selfhst:tidyquest-light",
	});
}

export default Component;
