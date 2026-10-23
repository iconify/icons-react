import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwcy0pbhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwcy0pbhj"/>`,
		"fallback": "vadivam:layout-arrow-down",
	});
}

export default Component;
