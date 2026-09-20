import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkelu8__e.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkelu8__e"/>`,
		"fallback": "jam:merge",
	});
}

export default Component;
