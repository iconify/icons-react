import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1ky3sbis.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v1ky3sbis"/>`,
		"fallback": "at-icons:sky-dome",
	});
}

export default Component;
