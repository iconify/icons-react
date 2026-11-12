import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_eb1s5-s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_eb1s5-s"/>`,
		"fallback": "selfhst:kubernetes-light",
	});
}

export default Component;
