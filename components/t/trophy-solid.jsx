import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xngkwz6zf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xngkwz6zf"/>`,
		"fallback": "stash:trophy-solid",
	});
}

export default Component;
