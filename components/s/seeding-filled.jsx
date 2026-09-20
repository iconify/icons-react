import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a41ck6p4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a41ck6p4e"/>`,
		"fallback": "tabler:seeding-filled",
	});
}

export default Component;
