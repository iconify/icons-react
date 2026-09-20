import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhtq3obqt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhtq3obqt"/>`,
		"fallback": "teenyicons:layers-union-outline",
	});
}

export default Component;
