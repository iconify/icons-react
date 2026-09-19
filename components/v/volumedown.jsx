import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4gk5-dnq.css';

const viewBox = {"width":16,"height":13};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4gk5-dnq"/>`,
		"fallback": "formkit:volumedown",
	});
}

export default Component;
