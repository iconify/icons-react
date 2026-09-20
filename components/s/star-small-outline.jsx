import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6fabdwkg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6fabdwkg"/>`,
		"fallback": "teenyicons:star-small-outline",
	});
}

export default Component;
