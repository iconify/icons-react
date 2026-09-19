import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orf3lfbmm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orf3lfbmm"/>`,
		"fallback": "game-icons:melting-ice-cube",
	});
}

export default Component;
