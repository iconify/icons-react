import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/g/gwl_u7b3t.css';
import '../../css/i/i8oxowb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="gwl_u7b3t"/><path class="i8oxowb7l"/></g>`,
		"fallback": "streamline-logos:line-app-logo",
	});
}

export default Component;
