import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd2nb4bcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd2nb4bcs"/>`,
		"fallback": "thesvg-color:qbittorrent",
	});
}

export default Component;
