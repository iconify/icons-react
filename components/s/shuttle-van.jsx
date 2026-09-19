import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh_w06bnz.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh_w06bnz"/>`,
		"fallback": "fa-solid:shuttle-van",
	});
}

export default Component;
