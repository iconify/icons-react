import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh8pb8bip.css';
import '../../css/i/iq88sthgv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh8pb8bip"/><path class="iq88sthgv"/>`,
		"fallback": "energy-icons:message-check-20",
	});
}

export default Component;
