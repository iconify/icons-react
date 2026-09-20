import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb1ukqj_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb1ukqj_z"/>`,
		"fallback": "tabler:phone-filled",
	});
}

export default Component;
