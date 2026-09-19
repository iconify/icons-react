import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdjmgxbmq.css';

const viewBox = {"width":192,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdjmgxbmq"/>`,
		"fallback": "zmdi:volume-mute",
	});
}

export default Component;
