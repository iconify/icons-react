import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygaj_8b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygaj_8b1s"/>`,
		"fallback": "grommet-icons:volume-control",
	});
}

export default Component;
