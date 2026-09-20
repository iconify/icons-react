import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzx-n9bww.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzx-n9bww"/>`,
		"fallback": "rivet-icons:thumbs-down-solid",
	});
}

export default Component;
