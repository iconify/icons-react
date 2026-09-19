import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfla51bas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfla51bas"/>`,
		"fallback": "heroicons-outline:volume-up",
	});
}

export default Component;
