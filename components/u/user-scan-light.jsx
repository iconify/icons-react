import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/b/bro1k6byq.css';
import '../../css/z/zls1_oujj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="bro1k6byq"/><circle class="zls1_oujj"/></g>`,
		"fallback": "lets-icons:user-scan-light",
	});
}

export default Component;
