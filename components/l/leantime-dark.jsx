import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im55vabao.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im55vabao"/>`,
		"fallback": "selfhst:leantime-dark",
	});
}

export default Component;
