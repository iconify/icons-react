import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lui9wgb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lui9wgb9c"/>`,
		"fallback": "vadivam:share-2",
	});
}

export default Component;
