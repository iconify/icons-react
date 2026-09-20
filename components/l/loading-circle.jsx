import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn077eule.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn077eule"/>`,
		"fallback": "streamline-ultimate:loading-circle",
	});
}

export default Component;
