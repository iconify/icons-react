import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bprw-4yaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bprw-4yaq"/>`,
		"fallback": "withicons:shuffle-gloss",
	});
}

export default Component;
