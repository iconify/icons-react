import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt1o8pbzv.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt1o8pbzv"/>`,
		"fallback": "f7:rectangle-3-offgrid",
	});
}

export default Component;
