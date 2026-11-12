import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xghsn32in.css';
import '../../css/s/srz3brbjf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xghsn32in"/><path class="srz3brbjf"/>`,
		"fallback": "selfhst:tasmocompiler",
	});
}

export default Component;
