import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/c/cscjlsbxn.css';
import '../../css/t/t0kehibyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="cscjlsbxn"/><path class="t0kehibyf"/></g>`,
		"fallback": "streamline-logos:nintendo-switch-logo",
	});
}

export default Component;
