import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfnuo7ojb.css';
import '../../css/t/tmkl2dpkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfnuo7ojb"/><path class="tmkl2dpkt"/>`,
		"fallback": "basil:lightbulb-off-solid",
	});
}

export default Component;
