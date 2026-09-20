import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/futdkq_zx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="futdkq_zx"/>`,
		"fallback": "octicon:unfold-16",
	});
}

export default Component;
