import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x944gvjbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x944gvjbv"/>`,
		"fallback": "vadivam:table-cells-split",
	});
}

export default Component;
