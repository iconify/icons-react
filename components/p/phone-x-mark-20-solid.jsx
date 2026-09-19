import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgxfs0w7o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hgxfs0w7o"/>`,
		"fallback": "heroicons:phone-x-mark-20-solid",
	});
}

export default Component;
