import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/d/d9w5sob4s.css';
import '../../css/l/lkq9hjb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="d9w5sob4s"/><path class="lkq9hjb5t"/></g>`,
		"fallback": "streamline-logos:kibana-logo",
	});
}

export default Component;
