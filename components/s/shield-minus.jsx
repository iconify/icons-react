import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbr5wny1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbr5wny1o"/>`,
		"fallback": "vadivam:shield-minus",
	});
}

export default Component;
