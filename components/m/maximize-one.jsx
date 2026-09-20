import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqi7m4bey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqi7m4bey"/>`,
		"fallback": "mynaui:maximize-one",
	});
}

export default Component;
