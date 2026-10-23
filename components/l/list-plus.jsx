import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba-w97ous.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba-w97ous"/>`,
		"fallback": "vadivam:list-plus",
	});
}

export default Component;
