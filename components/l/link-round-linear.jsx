import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbmcrcl1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbmcrcl1c"/>`,
		"fallback": "solar:link-round-linear",
	});
}

export default Component;
