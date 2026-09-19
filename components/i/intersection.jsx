import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5_8t67kc.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5_8t67kc"/>`,
		"fallback": "gis:intersection",
	});
}

export default Component;
