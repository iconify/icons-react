import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6qwklb1l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6qwklb1l"/>`,
		"fallback": "carbon:waveform",
	});
}

export default Component;
