import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b068bac4u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b068bac4u"/>`,
		"fallback": "gravity-ui:math-intersection-shape",
	});
}

export default Component;
