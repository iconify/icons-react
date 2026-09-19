import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byo-9pbvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byo-9pbvk"/>`,
		"fallback": "iconamoon:sorting-left-duotone",
	});
}

export default Component;
