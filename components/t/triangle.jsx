import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhqehp1ap.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhqehp1ap"/>`,
		"fallback": "glyphs:triangle",
	});
}

export default Component;
