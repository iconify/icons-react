import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdt-y-bfl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdt-y-bfl"/>`,
		"fallback": "sidekickicons:pilcrow-20-solid",
	});
}

export default Component;
