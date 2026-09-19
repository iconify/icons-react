import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzyl5_u7t.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzyl5_u7t"/>`,
		"fallback": "dinkie-icons:radio-button",
	});
}

export default Component;
