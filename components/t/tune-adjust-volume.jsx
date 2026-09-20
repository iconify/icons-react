import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v84t6sqao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v84t6sqao"/>`,
		"fallback": "streamline-sharp:tune-adjust-volume",
	});
}

export default Component;
