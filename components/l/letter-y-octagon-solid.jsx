import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc7pr0bnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc7pr0bnk"/>`,
		"fallback": "mynaui:letter-y-octagon-solid",
	});
}

export default Component;
