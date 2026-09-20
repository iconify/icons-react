import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_vp5ob3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_vp5ob3n"/>`,
		"fallback": "tabler:notebook",
	});
}

export default Component;
