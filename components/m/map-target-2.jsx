import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygo8ey9ii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygo8ey9ii"/>`,
		"fallback": "streamline-cyber:map-target-2",
	});
}

export default Component;
