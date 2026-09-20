import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt3yji6_l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt3yji6_l"/>`,
		"fallback": "zondicons:toolscopy",
	});
}

export default Component;
