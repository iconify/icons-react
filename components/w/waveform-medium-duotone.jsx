import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7_j0sbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary u7_j0sbbh"/>`,
		"fallback": "iconaut:waveform-medium-duotone",
	});
}

export default Component;
