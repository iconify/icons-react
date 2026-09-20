import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlp7nj4mq.css';
import '../../css/z/z_edm0hny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlp7nj4mq"/><path clip-rule="evenodd" class="z_edm0hny"/>`,
		"fallback": "lineicons:shield-2-check",
	});
}

export default Component;
