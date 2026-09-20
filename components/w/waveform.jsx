import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvt6bnbgc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvt6bnbgc"/>`,
		"fallback": "ix:waveform",
	});
}

export default Component;
