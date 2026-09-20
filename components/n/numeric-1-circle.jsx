import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tswncoo2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tswncoo2s"/>`,
		"fallback": "mdi:numeric-1-circle",
	});
}

export default Component;
