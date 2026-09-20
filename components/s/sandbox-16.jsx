import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0q2h74kn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0q2h74kn"/>`,
		"fallback": "octicon:sandbox-16",
	});
}

export default Component;
