import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7fss-03f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7fss-03f"/>`,
		"fallback": "fa7-brands:stumbleupon",
	});
}

export default Component;
