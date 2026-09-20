import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/o/omot7ibmd.css';
import '../../css/y/ywkxnfbui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="omot7ibmd"/><path class="ywkxnfbui"/></g>`,
		"fallback": "lets-icons:package-box-close",
	});
}

export default Component;
