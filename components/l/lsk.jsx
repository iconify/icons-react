import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6oc-mbql.css';
import '../../css/x/x4ukzbcus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6oc-mbql"/><path class="x4ukzbcus"/>`,
		"fallback": "token:lsk",
	});
}

export default Component;
