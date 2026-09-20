import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvdel6b_x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvdel6b_x"/>`,
		"fallback": "temaki:tattoo-machine",
	});
}

export default Component;
