import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlzfj5w3x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlzfj5w3x"/>`,
		"fallback": "teenyicons:medium-outline",
	});
}

export default Component;
