import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zur5ywbmi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zur5ywbmi"/>`,
		"fallback": "octicon:verified",
	});
}

export default Component;
