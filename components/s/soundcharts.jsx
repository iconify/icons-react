import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0_s376nq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0_s376nq"/>`,
		"fallback": "thesvg-color:soundcharts",
	});
}

export default Component;
