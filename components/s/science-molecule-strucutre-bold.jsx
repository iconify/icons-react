import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-illub7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-illub7i"/>`,
		"fallback": "streamline-ultimate:science-molecule-strucutre-bold",
	});
}

export default Component;
