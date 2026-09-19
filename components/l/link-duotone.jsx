import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmdtu9bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmdtu9bja"/>`,
		"fallback": "iconamoon:link-duotone",
	});
}

export default Component;
