import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/r/rt2vuj_ro.css';
import '../../css/r/ragbhibbw.css';
import '../../css/n/nre7-0bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="rt2vuj_ro"/><path class="ragbhibbw"/><path class="nre7-0bvg"/></g>`,
		"fallback": "streamline-logos:vlc-logo",
	});
}

export default Component;
