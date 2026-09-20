import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnv09c1ef.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnv09c1ef"/>`,
		"fallback": "octicon:triangle-right-16",
	});
}

export default Component;
