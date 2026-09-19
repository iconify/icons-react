import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grhpbbc3o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grhpbbc3o"/>`,
		"fallback": "icomoon-free:pinterest2",
	});
}

export default Component;
