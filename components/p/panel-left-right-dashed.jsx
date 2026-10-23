import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbfaopxnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbfaopxnh"/>`,
		"fallback": "vadivam:panel-left-right-dashed",
	});
}

export default Component;
