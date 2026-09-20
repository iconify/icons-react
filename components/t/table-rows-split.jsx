import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb-7hwcld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb-7hwcld"/>`,
		"fallback": "lucide:table-rows-split",
	});
}

export default Component;
