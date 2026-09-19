import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtcji1bya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtcji1bya"/>`,
		"fallback": "heroicons:list-bullet",
	});
}

export default Component;
