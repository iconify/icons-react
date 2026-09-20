import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c00pevbfc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c00pevbfc"/>`,
		"fallback": "octicon:smiley-16",
	});
}

export default Component;
