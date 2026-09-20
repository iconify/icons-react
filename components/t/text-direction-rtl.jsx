import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glx4dwbcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glx4dwbcv"/>`,
		"fallback": "tabler:text-direction-rtl",
	});
}

export default Component;
