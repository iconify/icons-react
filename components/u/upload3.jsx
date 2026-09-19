import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1_ve62yi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1_ve62yi"/>`,
		"fallback": "icomoon-free:upload3",
	});
}

export default Component;
