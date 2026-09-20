import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/einr-yb0d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="einr-yb0d"/>`,
		"fallback": "streamline:lasso-tool-remix",
	});
}

export default Component;
