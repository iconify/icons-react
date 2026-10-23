import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izck_4u8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izck_4u8f"/>`,
		"fallback": "vadivam:venus-and-mars",
	});
}

export default Component;
