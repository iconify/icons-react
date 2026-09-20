import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-b8rwb9q.css';
import '../../css/l/llyqf3b8e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="o-b8rwb9q"/><path class="llyqf3b8e"/>`,
		"fallback": "selfhst:lingarr",
	});
}

export default Component;
