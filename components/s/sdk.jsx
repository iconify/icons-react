import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt65e8btj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt65e8btj"/>`,
		"fallback": "tabler:sdk",
	});
}

export default Component;
