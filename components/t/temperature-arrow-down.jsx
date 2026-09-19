import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1edp2nss.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1edp2nss"/>`,
		"fallback": "fa6-solid:temperature-arrow-down",
	});
}

export default Component;
