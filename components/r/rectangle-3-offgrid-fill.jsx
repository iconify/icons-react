import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m477lybbf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m477lybbf"/>`,
		"fallback": "f7:rectangle-3-offgrid-fill",
	});
}

export default Component;
