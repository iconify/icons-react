import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3t_iyber.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3t_iyber"/>`,
		"fallback": "temaki:school",
	});
}

export default Component;
