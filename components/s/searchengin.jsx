import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5612ukdf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5612ukdf"/>`,
		"fallback": "fa7-brands:searchengin",
	});
}

export default Component;
