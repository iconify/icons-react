import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi4wy58vz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi4wy58vz"/>`,
		"fallback": "tabler:radius-bottom-right",
	});
}

export default Component;
