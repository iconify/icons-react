import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulc-50zkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulc-50zkk"/>`,
		"fallback": "grommet-icons:layer",
	});
}

export default Component;
