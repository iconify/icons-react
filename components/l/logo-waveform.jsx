import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndzk00itk.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndzk00itk"/>`,
		"fallback": "fad:logo-waveform",
	});
}

export default Component;
