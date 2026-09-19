import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3sldgb7k.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3sldgb7k"/>`,
		"fallback": "fa7-brands:typescript",
	});
}

export default Component;
