import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/une0tkb_h.css';
import '../../css/z/zxjr-cemx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="une0tkb_h"/><path class="zxjr-cemx"/>`,
		"fallback": "selfhst:k7",
	});
}

export default Component;
