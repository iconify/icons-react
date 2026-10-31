import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpfeuxjdz.css';
import '../../css/j/j33ca7bac.css';
import '../../css/e/et9g0gkeb.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpfeuxjdz"/><path class="j33ca7bac"/><path class="et9g0gkeb"/>`,
		"fallback": "tabler-flags:nauru",
	});
}

export default Component;
