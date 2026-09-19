import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqfv87bft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqfv87bft"/>`,
		"fallback": "iconoir:mobile-voice",
	});
}

export default Component;
