import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjuf0q4gr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjuf0q4gr"/>`,
		"fallback": "vadivam:locate",
	});
}

export default Component;
