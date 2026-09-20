import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti7rv8b7t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti7rv8b7t"/>`,
		"fallback": "temaki:sculpture",
	});
}

export default Component;
