import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olt19cb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olt19cb-f"/>`,
		"fallback": "hugeicons:square-unlock-01",
	});
}

export default Component;
