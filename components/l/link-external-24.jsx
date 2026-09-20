import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6vk5q15g.css';
import '../../css/r/reb4c0b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6vk5q15g"/><path class="reb4c0b4l"/>`,
		"fallback": "octicon:link-external-24",
	});
}

export default Component;
