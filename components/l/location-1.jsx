import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d4z8ksbxz.css';
import '../../css/i/ipbtokb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d4z8ksbxz"/><path class="ipbtokb7n"/></g>`,
		"fallback": "tdesign:location-1",
	});
}

export default Component;
