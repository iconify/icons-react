import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlt9o_vzy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlt9o_vzy"/>`,
		"fallback": "selfhst:socialhome-light",
	});
}

export default Component;
