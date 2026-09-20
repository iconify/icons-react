import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um5mxq8ef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="um5mxq8ef"/>`,
		"fallback": "streamline-sharp:watch-square-time-remix",
	});
}

export default Component;
