import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztx4bbczg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztx4bbczg"/>`,
		"fallback": "thesvg-color:wallabag",
	});
}

export default Component;
