import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lffz6_2ef.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lffz6_2ef"/>`,
		"fallback": "heroicons-solid:view-boards",
	});
}

export default Component;
