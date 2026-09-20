import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/impn5pp0y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="impn5pp0y"/>`,
		"fallback": "teenyicons:mood-frown-solid",
	});
}

export default Component;
