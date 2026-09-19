import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tomu-wbul.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tomu-wbul"/>`,
		"fallback": "heroicons:light-bulb-16-solid",
	});
}

export default Component;
