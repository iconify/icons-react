import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsa5dzbll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsa5dzbll"/>`,
		"fallback": "vadivam:mail-minus",
	});
}

export default Component;
