import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgh3h12lr.css';
import '../../css/f/fmv_7cgeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgh3h12lr"/><path class="fmv_7cgeu"/>`,
		"fallback": "bx:left-top-arrow-circle",
	});
}

export default Component;
