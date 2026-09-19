import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg50s5vtf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gg50s5vtf"/>`,
		"fallback": "at-icons:planet",
	});
}

export default Component;
