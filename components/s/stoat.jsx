import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycbseobgb.css';
import '../../css/d/dbcsx4b-m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ycbseobgb"/><path class="dbcsx4b-m"/>`,
		"fallback": "selfhst:stoat",
	});
}

export default Component;
