import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx0rv7bbf.css';
import '../../css/k/khdf871ad.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx0rv7bbf"/><path class="khdf871ad"/>`,
		"fallback": "energy-icons:video-off-20-bold",
	});
}

export default Component;
