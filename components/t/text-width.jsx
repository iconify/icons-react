import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uea3qtb-k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uea3qtb-k"/>`,
		"fallback": "icomoon-free:text-width",
	});
}

export default Component;
