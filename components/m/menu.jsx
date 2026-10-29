import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuyljqb_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuyljqb_z"/>`,
		"fallback": "vadivam:menu",
	});
}

export default Component;
