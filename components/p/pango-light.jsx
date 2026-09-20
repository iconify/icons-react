import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulve3il0b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulve3il0b"/>`,
		"fallback": "selfhst:pango-light",
	});
}

export default Component;
