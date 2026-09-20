import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/una5hpbth.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="una5hpbth"/>`,
		"fallback": "zondicons:pen-tool",
	});
}

export default Component;
