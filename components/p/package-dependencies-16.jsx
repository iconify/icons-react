import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/both_jbwf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="both_jbwf"/>`,
		"fallback": "octicon:package-dependencies-16",
	});
}

export default Component;
