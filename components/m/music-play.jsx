import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxq98cb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxq98cb3b"/>`,
		"fallback": "noviair:music-play",
	});
}

export default Component;
