import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsym9qk0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsym9qk0e"/>`,
		"fallback": "cbi:sonos-sub",
	});
}

export default Component;
