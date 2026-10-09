import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scb7y9b9c.css';
import '../../css/i/idw1h8qwq.css';
import '../../css/j/j7lslxezw.css';
import '../../css/y/yp6p--jhv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scb7y9b9c"/><path class="idw1h8qwq"/><path class="j7lslxezw"/><path class="yp6p--jhv"/>`,
		"fallback": "energy-icons:investment-48",
	});
}

export default Component;
