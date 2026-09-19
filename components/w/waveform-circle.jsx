import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1p6u1b4c.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1p6u1b4c"/>`,
		"fallback": "f7:waveform-circle",
	});
}

export default Component;
