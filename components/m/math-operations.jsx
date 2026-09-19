import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvopj_b_a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uvopj_b_a"/>`,
		"fallback": "gravity-ui:math-operations",
	});
}

export default Component;
