import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgn4dacid.css';
import '../../css/z/zvp4gxblo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgn4dacid"/><path class="zvp4gxblo"/>`,
		"fallback": "stash:signin-duotone",
	});
}

export default Component;
