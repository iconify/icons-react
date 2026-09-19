import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc1euxbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jc1euxbuu"/>`,
		"fallback": "flowbite:pen-nib-solid",
	});
}

export default Component;
