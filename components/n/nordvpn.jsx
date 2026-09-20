import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh4l7dhqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh4l7dhqt"/>`,
		"fallback": "thesvg-color:nordvpn",
	});
}

export default Component;
