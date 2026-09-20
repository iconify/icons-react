import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsur8-ztq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsur8-ztq"/>`,
		"fallback": "streamline-ultimate:pasta-bowl-warm-bold",
	});
}

export default Component;
