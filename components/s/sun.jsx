import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l29605bwn.css';
import '../../css/u/ur2d1ktml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l29605bwn"/><path class="ur2d1ktml"/>`,
		"fallback": "pixel:sun",
	});
}

export default Component;
