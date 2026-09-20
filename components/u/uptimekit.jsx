import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkei5sq7u.css';
import '../../css/q/qy8hd1btp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkei5sq7u"/><path class="qy8hd1btp"/>`,
		"fallback": "selfhst:uptimekit",
	});
}

export default Component;
