import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtdk27bpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtdk27bpx"/>`,
		"fallback": "thesvg-color:les-libraires",
	});
}

export default Component;
