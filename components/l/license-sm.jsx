import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgj_o_0ra.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bgj_o_0ra"/>`,
		"fallback": "pajamas:license-sm",
	});
}

export default Component;
