import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n27emnbuv.css';
import '../../css/x/x_3uzco3b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n27emnbuv"/><rect class="x_3uzco3b"/>`,
		"fallback": "material-icon-theme:markdoc",
	});
}

export default Component;
