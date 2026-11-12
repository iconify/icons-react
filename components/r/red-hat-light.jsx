import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg10sto-u.css';
import '../../css/c/cczp_s_we.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg10sto-u"/><path class="cczp_s_we"/>`,
		"fallback": "selfhst:red-hat-light",
	});
}

export default Component;
