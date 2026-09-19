import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7r4tcwgg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g7r4tcwgg"/>`,
		"fallback": "heroicons:user-circle-16-solid",
	});
}

export default Component;
