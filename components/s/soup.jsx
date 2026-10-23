import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkzmv2b4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkzmv2b4v"/>`,
		"fallback": "vadivam:soup",
	});
}

export default Component;
