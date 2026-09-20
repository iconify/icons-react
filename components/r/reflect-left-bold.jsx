import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoh5_ms0c.css';
import '../../css/h/h-jbhd6rq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hoh5_ms0c"/><path class="h-jbhd6rq"/>`,
		"fallback": "streamline-ultimate:reflect-left-bold",
	});
}

export default Component;
