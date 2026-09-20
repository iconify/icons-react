import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1gyudb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1gyudb_l"/>`,
		"fallback": "mdi:microsoft-outlook",
	});
}

export default Component;
