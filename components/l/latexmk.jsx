import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-e5hhbwn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-e5hhbwn"/>`,
		"fallback": "material-icon-theme:latexmk",
	});
}

export default Component;
