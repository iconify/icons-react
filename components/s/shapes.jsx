import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_gdq_l-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_gdq_l-y"/>`,
		"fallback": "vadivam:shapes",
	});
}

export default Component;
