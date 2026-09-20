import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs55nrb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs55nrb5e"/>`,
		"fallback": "vadivam:phone",
	});
}

export default Component;
