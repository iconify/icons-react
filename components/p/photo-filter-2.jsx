import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v282bqb2o.css';
import '../../css/t/tsn5jyb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="v282bqb2o"/><circle class="tsn5jyb8z"/></g>`,
		"fallback": "proicons:photo-filter-2",
	});
}

export default Component;
