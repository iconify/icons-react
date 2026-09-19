import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thlt711ob.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thlt711ob"/>`,
		"fallback": "icomoon-free:tux",
	});
}

export default Component;
