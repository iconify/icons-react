import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt0r02b_r.css';
import '../../css/m/mq4ja3bsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt0r02b_r"/><path class="mq4ja3bsd"/>`,
		"fallback": "tdesign:swear-2-filled",
	});
}

export default Component;
