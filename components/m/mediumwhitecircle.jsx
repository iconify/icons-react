import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3p8w_7pg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="m3p8w_7pg"/>`,
		"fallback": "fxemoji:mediumwhitecircle",
	});
}

export default Component;
