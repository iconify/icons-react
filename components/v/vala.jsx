import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u59a1m3qs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u59a1m3qs"/>`,
		"fallback": "material-icon-theme:vala",
	});
}

export default Component;
