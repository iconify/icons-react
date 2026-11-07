import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esxisibaw.css';
import '../../css/u/ud65eiioe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="esxisibaw"/><path class="ud65eiioe"/>`,
		"fallback": "solar:medal-ribbon-bold-duotone",
	});
}

export default Component;
