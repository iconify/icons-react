import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0hie25hf.css';
import '../../css/a/asxl2zw-h.css';
import '../../css/v/vf565cbtz.css';
import '../../css/w/wcz1y7biv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0hie25hf"/><path class="asxl2zw-h"/><path class="vf565cbtz"/><path class="wcz1y7biv"/>`,
		"fallback": "energy-icons:shovel-20-bold",
	});
}

export default Component;
