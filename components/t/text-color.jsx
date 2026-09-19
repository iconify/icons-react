import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7u3b2bsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7u3b2bsn"/>`,
		"fallback": "hugeicons:text-color",
	});
}

export default Component;
