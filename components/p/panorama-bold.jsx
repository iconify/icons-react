import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5qmym-cz.css';
import '../../css/i/iln029b4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5qmym-cz"/><path clip-rule="evenodd" class="iln029b4a"/>`,
		"fallback": "solar:panorama-bold",
	});
}

export default Component;
