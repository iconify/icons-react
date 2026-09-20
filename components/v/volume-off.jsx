import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpckdd_2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpckdd_2m"/>`,
		"fallback": "meteor-icons:volume-off",
	});
}

export default Component;
