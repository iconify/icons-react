import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgcuu1b3j.css';
import '../../css/q/qi9kc7bbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgcuu1b3j"/><path clip-rule="evenodd" class="qi9kc7bbe"/>`,
		"fallback": "solar:logout-2-bold-duotone",
	});
}

export default Component;
