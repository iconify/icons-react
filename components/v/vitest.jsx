import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4dstr52f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4dstr52f"/>`,
		"fallback": "material-icon-theme:vitest",
	});
}

export default Component;
