import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0g9j6bqe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0g9j6bqe"/>`,
		"fallback": "healthicons:ui-preferences",
	});
}

export default Component;
