import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmobyc_fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmobyc_fv"/>`,
		"fallback": "ri:remix-run-line",
	});
}

export default Component;
