import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg2o5wied.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg2o5wied"/>`,
		"fallback": "cryptocurrency:vrc",
	});
}

export default Component;
