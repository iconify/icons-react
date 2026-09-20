import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vixpal6lt.css';
import '../../css/p/po4snyb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vixpal6lt"/><path clip-rule="evenodd" class="po4snyb_p"/>`,
		"fallback": "nrk:media-play-fail",
	});
}

export default Component;
