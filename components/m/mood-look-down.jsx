import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uubdgd69a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uubdgd69a"/>`,
		"fallback": "tabler:mood-look-down",
	});
}

export default Component;
