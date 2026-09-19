import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixs07e3on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixs07e3on"/>`,
		"fallback": "grommet-icons:services",
	});
}

export default Component;
