import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeqjdnbao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeqjdnbao"/>`,
		"fallback": "ri:quill-pen-line",
	});
}

export default Component;
