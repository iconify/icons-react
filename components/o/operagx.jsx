import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrc4qfb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrc4qfb2o"/>`,
		"fallback": "simple-icons:operagx",
	});
}

export default Component;
