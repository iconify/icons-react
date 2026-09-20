import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1ggw3shx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1ggw3shx"/>`,
		"fallback": "selfhst:trac-light",
	});
}

export default Component;
