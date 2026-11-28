import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9alm_bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9alm_bhv"/>`,
		"fallback": "iconaut:link-2-solid",
	});
}

export default Component;
