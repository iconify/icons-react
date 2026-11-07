import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgv6vob-r.css';
import '../../css/d/dr-zygb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kgv6vob-r"/><path class="dr-zygb6f"/>`,
		"fallback": "solar:ufo-bold-duotone",
	});
}

export default Component;
