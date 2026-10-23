import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u91f8-bop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u91f8-bop"/>`,
		"fallback": "vadivam:non-binary",
	});
}

export default Component;
