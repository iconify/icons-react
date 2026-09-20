import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a1149j1wh.css';
import '../../css/g/gx4ah_6qi.css';
import '../../css/n/nc5jv0bhh.css';
import '../../css/a/a9vsgkbga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a1149j1wh"/><circle class="gx4ah_6qi"/><circle class="nc5jv0bhh"/><circle class="a9vsgkbga"/></g>`,
		"fallback": "meteor-icons:sliders",
	});
}

export default Component;
