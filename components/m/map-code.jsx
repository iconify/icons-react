import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg-_6t7_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg-_6t7_t"/>`,
		"fallback": "tabler:map-code",
	});
}

export default Component;
