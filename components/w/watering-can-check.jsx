import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovpm-ut7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovpm-ut7a"/>`,
		"fallback": "noviair-light:watering-can-check",
	});
}

export default Component;
