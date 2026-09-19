import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz-nt3jcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz-nt3jcu"/>`,
		"fallback": "grommet-icons:sort",
	});
}

export default Component;
