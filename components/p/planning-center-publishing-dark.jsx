import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5h931lea.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5h931lea"/>`,
		"fallback": "selfhst:planning-center-publishing-dark",
	});
}

export default Component;
