import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm_iszbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jm_iszbvl"/>`,
		"fallback": "iconamoon:screen-normal-light",
	});
}

export default Component;
