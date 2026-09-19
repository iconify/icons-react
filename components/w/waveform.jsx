import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz8ba9tgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b vz8ba9tgh"/>`,
		"fallback": "boxicons:waveform",
	});
}

export default Component;
