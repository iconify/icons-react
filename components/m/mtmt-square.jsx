import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzkdiqb5h.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzkdiqb5h"/>`,
		"fallback": "academicons:mtmt-square",
	});
}

export default Component;
