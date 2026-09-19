import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftc2pcbzt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftc2pcbzt"/>`,
		"fallback": "dinkie-icons:keycap-fn",
	});
}

export default Component;
