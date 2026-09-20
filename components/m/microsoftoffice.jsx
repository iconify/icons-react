import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hos4-7jae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hos4-7jae"/>`,
		"fallback": "simple-icons:microsoftoffice",
	});
}

export default Component;
