import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z32lg_tbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z32lg_tbn"/>`,
		"fallback": "mdi:motion-sensor-off",
	});
}

export default Component;
