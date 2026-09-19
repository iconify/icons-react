import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xci1zob4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xci1zob4d"/>`,
		"fallback": "cbi:mediaset-infinity",
	});
}

export default Component;
