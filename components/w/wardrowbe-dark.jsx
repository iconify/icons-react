import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csj5fll6c.css';
import '../../css/y/y_bc29brb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csj5fll6c"/><path class="y_bc29brb"/>`,
		"fallback": "selfhst:wardrowbe-dark",
	});
}

export default Component;
