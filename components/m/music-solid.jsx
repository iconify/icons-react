import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-6smlkmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-6smlkmc"/>`,
		"fallback": "pixel:music-solid",
	});
}

export default Component;
