import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7_2a2mjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7_2a2mjo"/>`,
		"fallback": "vadivam:sliders-horizontal",
	});
}

export default Component;
