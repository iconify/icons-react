import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfzotcwxd.css';
import '../../css/e/eart31dpa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfzotcwxd"/><path class="eart31dpa"/>`,
		"fallback": "nimbus:peso",
	});
}

export default Component;
