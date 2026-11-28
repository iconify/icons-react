import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyxkz4bho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyxkz4bho"/>`,
		"fallback": "iconaut:signpost-solid",
	});
}

export default Component;
