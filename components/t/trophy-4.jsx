import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6yhmzbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6yhmzbyy"/>`,
		"fallback": "streamline-cyber:trophy-4",
	});
}

export default Component;
