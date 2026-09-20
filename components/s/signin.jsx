import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og-t-ob6a.css';
import '../../css/z/zvp4gxblo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og-t-ob6a"/><path class="zvp4gxblo"/>`,
		"fallback": "stash:signin",
	});
}

export default Component;
