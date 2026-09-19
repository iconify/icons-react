import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk8prvb7o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk8prvb7o"/>`,
		"fallback": "bi:list-nested",
	});
}

export default Component;
