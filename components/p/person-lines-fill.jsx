import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfj87j4sm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfj87j4sm"/>`,
		"fallback": "bi:person-lines-fill",
	});
}

export default Component;
