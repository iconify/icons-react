import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6433eekj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6433eekj"/>`,
		"fallback": "oui:list-add",
	});
}

export default Component;
