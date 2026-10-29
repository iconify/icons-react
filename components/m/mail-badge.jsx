import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh4g_ac8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh4g_ac8b"/>`,
		"fallback": "vadivam:mail-badge",
	});
}

export default Component;
