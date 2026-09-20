import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezqm6lbjp.css';

const viewBox = {"width":20,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezqm6lbjp"/>`,
		"fallback": "temaki:water-bottle",
	});
}

export default Component;
