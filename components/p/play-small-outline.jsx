import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o75vuubjm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o75vuubjm"/>`,
		"fallback": "teenyicons:play-small-outline",
	});
}

export default Component;
