import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw9fhgbwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw9fhgbwm"/>`,
		"fallback": "vadivam:square-split-vertical",
	});
}

export default Component;
