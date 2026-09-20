import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pde1fbz0b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pde1fbz0b"/>`,
		"fallback": "lsicon:user-filled",
	});
}

export default Component;
