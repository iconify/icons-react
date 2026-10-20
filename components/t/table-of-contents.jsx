import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk0od7ber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk0od7ber"/>`,
		"fallback": "vadivam:table-of-contents",
	});
}

export default Component;
