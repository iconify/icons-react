import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro4bg4bvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro4bg4bvo"/>`,
		"fallback": "tabler:link-question",
	});
}

export default Component;
