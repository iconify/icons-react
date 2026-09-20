import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bguki9bvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bguki9bvt"/>`,
		"fallback": "keyline-icons:send-horizontal-sharp",
	});
}

export default Component;
