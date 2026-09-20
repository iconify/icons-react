import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrm-uouht.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrm-uouht"/>`,
		"fallback": "selfhst:patchmon-dark",
	});
}

export default Component;
