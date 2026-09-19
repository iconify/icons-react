import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw2d8kh4b.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw2d8kh4b"/>`,
		"fallback": "dinkie-icons:shopping-trolley-small",
	});
}

export default Component;
