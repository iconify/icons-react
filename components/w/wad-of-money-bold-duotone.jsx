import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5lttmq7g.css';
import '../../css/n/n6jo5gq3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5lttmq7g"/><path class="n6jo5gq3g"/>`,
		"fallback": "solar:wad-of-money-bold-duotone",
	});
}

export default Component;
