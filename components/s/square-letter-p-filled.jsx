import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5-6i-bos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5-6i-bos"/>`,
		"fallback": "tabler:square-letter-p-filled",
	});
}

export default Component;
