import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um5-vnbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um5-vnbtu"/>`,
		"fallback": "vadivam:nut-off",
	});
}

export default Component;
