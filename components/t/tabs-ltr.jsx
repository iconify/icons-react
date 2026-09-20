import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_xui1bqs.css';
import '../../css/u/u8q_ug4pj.css';
import '../../css/e/e6sjhzbvx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_xui1bqs"/><circle class="u8q_ug4pj"/><circle class="e6sjhzbvx"/>`,
		"fallback": "ooui:tabs-ltr",
	});
}

export default Component;
