import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm1mhyw_f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rm1mhyw_f"/>`,
		"fallback": "gravity-ui:power",
	});
}

export default Component;
