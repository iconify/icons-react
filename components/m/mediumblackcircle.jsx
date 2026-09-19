import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx919ebgc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="qx919ebgc"/>`,
		"fallback": "fxemoji:mediumblackcircle",
	});
}

export default Component;
