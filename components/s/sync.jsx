import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgja89bwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgja89bwq"/>`,
		"fallback": "pixelarticons:sync",
	});
}

export default Component;
