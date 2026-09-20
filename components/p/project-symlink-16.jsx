import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpnn3uu-g.css';
import '../../css/j/jletztwxl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpnn3uu-g"/><path class="jletztwxl"/>`,
		"fallback": "octicon:project-symlink-16",
	});
}

export default Component;
