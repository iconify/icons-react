import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuxesyojl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xuxesyojl"/>`,
		"fallback": "uil:water-glass",
	});
}

export default Component;
