import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urfk5jbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urfk5jbik"/>`,
		"fallback": "keyline-icons:piggy-bank-sharp-fill",
	});
}

export default Component;
