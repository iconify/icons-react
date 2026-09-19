import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfe9l6bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfe9l6bar"/>`,
		"fallback": "grommet-icons:paint",
	});
}

export default Component;
