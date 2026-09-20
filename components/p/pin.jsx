import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awajley2v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awajley2v"/>`,
		"fallback": "zondicons:pin",
	});
}

export default Component;
