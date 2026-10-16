import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex7vb15ij.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex7vb15ij"/>`,
		"fallback": "energy-icons:waveform-20",
	});
}

export default Component;
