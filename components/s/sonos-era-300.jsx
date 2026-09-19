import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsit20tsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsit20tsf"/>`,
		"fallback": "cbi:sonos-era-300",
	});
}

export default Component;
