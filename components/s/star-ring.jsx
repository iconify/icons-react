import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b65-p4bii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b65-p4bii"/>`,
		"fallback": "reicon:star-ring",
	});
}

export default Component;
