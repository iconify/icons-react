import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqxioub5v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqxioub5v"/>`,
		"fallback": "selfhst:pcloud-dark",
	});
}

export default Component;
