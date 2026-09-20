import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeghuabay.css';
import '../../css/g/gb3vxeboe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeghuabay"/><path class="gb3vxeboe"/>`,
		"fallback": "selfhst:jetkvm",
	});
}

export default Component;
