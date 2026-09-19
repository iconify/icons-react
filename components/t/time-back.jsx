import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbl1pdi-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mbl1pdi-n"/>`,
		"fallback": "griddy-icons:time-back",
	});
}

export default Component;
