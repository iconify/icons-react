import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui_yqjhja.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui_yqjhja"/>`,
		"fallback": "dinkie-icons:left-magnifying-glass",
	});
}

export default Component;
