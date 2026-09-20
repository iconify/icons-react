import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps-6-ibio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps-6-ibio"/>`,
		"fallback": "tabler:polygon",
	});
}

export default Component;
