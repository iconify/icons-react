import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2n52yftw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2n52yftw"/>`,
		"fallback": "flowbite:minimize-solid",
	});
}

export default Component;
