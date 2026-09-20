import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abc94bc3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abc94bc3y"/>`,
		"fallback": "simple-icons:miro",
	});
}

export default Component;
