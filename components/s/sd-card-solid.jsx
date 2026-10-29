import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptuvc-bao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptuvc-bao"/>`,
		"fallback": "withicons:sd-card-solid",
	});
}

export default Component;
