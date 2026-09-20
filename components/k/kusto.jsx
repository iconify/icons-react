import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5kjy4_hr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5kjy4_hr"/>`,
		"fallback": "material-icon-theme:kusto",
	});
}

export default Component;
