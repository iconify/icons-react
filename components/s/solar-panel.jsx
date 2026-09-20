import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg8_r5bqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg8_r5bqv"/>`,
		"fallback": "tabler:solar-panel",
	});
}

export default Component;
