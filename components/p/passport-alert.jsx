import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz6wdbc0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz6wdbc0g"/>`,
		"fallback": "mdi:passport-alert",
	});
}

export default Component;
