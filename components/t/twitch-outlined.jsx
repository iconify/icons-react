import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r00akdbix.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r00akdbix"/>`,
		"fallback": "ant-design:twitch-outlined",
	});
}

export default Component;
