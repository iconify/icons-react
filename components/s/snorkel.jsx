import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htzosabxt.css';
import '../../css/r/rbd0bhbbe.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htzosabxt"/><path class="rbd0bhbbe"/>`,
		"fallback": "fontisto:snorkel",
	});
}

export default Component;
