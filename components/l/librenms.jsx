import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wivhkqb-l.css';
import '../../css/m/m7vfhemuf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wivhkqb-l"/><path class="m7vfhemuf"/>`,
		"fallback": "selfhst:librenms",
	});
}

export default Component;
