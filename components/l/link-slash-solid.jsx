import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rck100efq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rck100efq"/>`,
		"fallback": "heroicons:link-slash-solid",
	});
}

export default Component;
