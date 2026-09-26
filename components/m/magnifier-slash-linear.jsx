import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hllyxzboc.css';
import '../../css/c/cl9yaabvy.css';
import '../../css/o/o3o_tvbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="hllyxzboc"/><path class="cl9yaabvy"/><path class="o3o_tvbax"/></g>`,
		"fallback": "solar:magnifier-slash-linear",
	});
}

export default Component;
