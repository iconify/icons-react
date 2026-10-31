import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk85qacez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk85qacez"/>`,
		"fallback": "coolicons:square-dashed-check-fill-round",
	});
}

export default Component;
