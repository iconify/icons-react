import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcdw70s4r.css';

const viewBox = {"width":14,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcdw70s4r"/>`,
		"fallback": "fontisto:shopping-pos-machine",
	});
}

export default Component;
