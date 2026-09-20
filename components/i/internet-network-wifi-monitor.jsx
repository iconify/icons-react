import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bscwe4z-x.css';
import '../../css/i/iuqenpiuh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bscwe4z-x"/><path class="iuqenpiuh"/>`,
		"fallback": "streamline-pixel:internet-network-wifi-monitor",
	});
}

export default Component;
