import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkgd5826b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkgd5826b"/>`,
		"fallback": "cbi:sonos",
	});
}

export default Component;
