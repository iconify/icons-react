import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq-59rbmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq-59rbmp"/>`,
		"fallback": "vadivam:shield-alert",
	});
}

export default Component;
