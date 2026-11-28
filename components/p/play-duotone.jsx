import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s58z6bw5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary s58z6bw5e"/>`,
		"fallback": "iconaut:play-duotone",
	});
}

export default Component;
