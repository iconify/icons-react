import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z59i82b9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z59i82b9g"/>`,
		"fallback": "vadivam:rocket",
	});
}

export default Component;
