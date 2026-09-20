import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma_on844r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma_on844r"/>`,
		"fallback": "tabler:moon-filled",
	});
}

export default Component;
