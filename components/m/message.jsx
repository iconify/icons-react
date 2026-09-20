import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjcrkmb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjcrkmb7v"/>`,
		"fallback": "typcn:message",
	});
}

export default Component;
