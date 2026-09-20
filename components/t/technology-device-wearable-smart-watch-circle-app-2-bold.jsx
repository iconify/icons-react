import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jork_dbtm.css';
import '../../css/w/wsj8ofa5i.css';
import '../../css/w/w-kmabubr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jork_dbtm"/><path class="wsj8ofa5i"/><path class="w-kmabubr"/>`,
		"fallback": "streamline-ultimate:technology-device-wearable-smart-watch-circle-app-2-bold",
	});
}

export default Component;
