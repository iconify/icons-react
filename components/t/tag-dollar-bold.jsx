import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqk8hyryo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqk8hyryo"/>`,
		"fallback": "streamline-ultimate:tag-dollar-bold",
	});
}

export default Component;
