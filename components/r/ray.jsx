import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp_v__9ps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp_v__9ps"/>`,
		"fallback": "thesvg-color:ray",
	});
}

export default Component;
