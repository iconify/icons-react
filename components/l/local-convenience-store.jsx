import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um3c7fi5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um3c7fi5l"/>`,
		"fallback": "mdi:local-convenience-store",
	});
}

export default Component;
