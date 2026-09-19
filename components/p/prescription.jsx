import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjzu1bbsy.css';
import '../../css/h/hhnaxiuju.css';

const viewBox = {"width":18,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjzu1bbsy"/><path class="hhnaxiuju"/>`,
		"fallback": "fontisto:prescription",
	});
}

export default Component;
