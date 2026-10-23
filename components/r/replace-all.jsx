import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcr8bkwpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcr8bkwpo"/>`,
		"fallback": "vadivam:replace-all",
	});
}

export default Component;
