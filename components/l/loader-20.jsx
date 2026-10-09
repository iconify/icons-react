import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6uvnacec.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6uvnacec"/>`,
		"fallback": "energy-icons:loader-20",
	});
}

export default Component;
