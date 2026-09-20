import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt31c58xs.css';
import '../../css/l/lwvq-ccsv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt31c58xs"/><path class="lwvq-ccsv"/>`,
		"fallback": "selfhst:netbird",
	});
}

export default Component;
