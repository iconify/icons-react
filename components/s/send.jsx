import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg546h7yc.css';
import '../../css/h/h0a-t_-kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg546h7yc"/><path class="h0a-t_-kc"/>`,
		"fallback": "withicons-bauhaus:send",
	});
}

export default Component;
