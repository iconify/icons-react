import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/n/nap2kajkk.css';
import '../../css/x/x6953cc8e.css';
import '../../css/p/p1vuc1bjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="nap2kajkk"/><path class="x6953cc8e"/><path class="p1vuc1bjq"/></g>`,
		"fallback": "streamline-logos:renren-logo-1",
	});
}

export default Component;
