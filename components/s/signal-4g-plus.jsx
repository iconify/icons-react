import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgxa4cbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgxa4cbke"/>`,
		"fallback": "tabler:signal-4g-plus",
	});
}

export default Component;
