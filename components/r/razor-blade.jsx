import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bosx53r-t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bosx53r-t"/>`,
		"fallback": "at-icons:razor-blade",
	});
}

export default Component;
