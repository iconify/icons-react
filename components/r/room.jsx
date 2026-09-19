import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw5cdwbcw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw5cdwbcw"/>`,
		"fallback": "fluent-mdl2:room",
	});
}

export default Component;
