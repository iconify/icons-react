import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to354f_iu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to354f_iu"/>`,
		"fallback": "hugeicons:pointing-right-05",
	});
}

export default Component;
