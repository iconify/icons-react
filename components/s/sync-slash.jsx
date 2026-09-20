import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhtk0wbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhtk0wbpd"/>`,
		"fallback": "uis:sync-slash",
	});
}

export default Component;
