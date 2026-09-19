import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqv2w248g.css';
import '../../css/v/vojqrkb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqv2w248g"/><path class="vojqrkb9r"/>`,
		"fallback": "boxicons:tram",
	});
}

export default Component;
