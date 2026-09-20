import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7p8u_bgx.css';
import '../../css/t/t2z2jnber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7p8u_bgx"/><path class="t2z2jnber"/>`,
		"fallback": "stash:pause-duotone",
	});
}

export default Component;
