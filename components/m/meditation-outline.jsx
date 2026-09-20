import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmcau6bvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hmcau6bvl"/>`,
		"fallback": "solar:meditation-outline",
	});
}

export default Component;
