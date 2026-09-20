import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh21a-bdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh21a-bdi"/>`,
		"fallback": "streamline-ultimate:upload-square-1-bold",
	});
}

export default Component;
