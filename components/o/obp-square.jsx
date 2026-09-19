import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfdjb0b4f.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfdjb0b4f"/>`,
		"fallback": "academicons:obp-square",
	});
}

export default Component;
