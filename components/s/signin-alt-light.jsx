import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjckms-gm.css';
import '../../css/w/wpmkoacem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjckms-gm"/><path class="wpmkoacem"/>`,
		"fallback": "stash:signin-alt-light",
	});
}

export default Component;
