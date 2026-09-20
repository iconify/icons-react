import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s00wh1b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s00wh1b-v"/>`,
		"fallback": "tabler:shield-check-filled",
	});
}

export default Component;
