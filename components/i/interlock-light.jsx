import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shhm08woh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shhm08woh"/>`,
		"fallback": "selfhst:interlock-light",
	});
}

export default Component;
