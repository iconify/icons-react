import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umk3i6b0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umk3i6b0d"/>`,
		"fallback": "mdi:television-guide",
	});
}

export default Component;
