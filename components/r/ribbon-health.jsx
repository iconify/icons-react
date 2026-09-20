import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv7o_0b3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv7o_0b3t"/>`,
		"fallback": "tabler:ribbon-health",
	});
}

export default Component;
