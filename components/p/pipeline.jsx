import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eovpu-b_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eovpu-b_x"/>`,
		"fallback": "tabler:pipeline",
	});
}

export default Component;
