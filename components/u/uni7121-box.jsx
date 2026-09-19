import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoxt38ayv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qoxt38ayv"/>`,
		"fallback": "dinkie-icons:uni7121-box",
	});
}

export default Component;
