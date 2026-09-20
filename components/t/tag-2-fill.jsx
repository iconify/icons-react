import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2fiuw9jr.css';
import '../../css/k/koneki24a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2fiuw9jr"/><path clip-rule="evenodd" class="koneki24a"/>`,
		"fallback": "mingcute:tag-2-fill",
	});
}

export default Component;
