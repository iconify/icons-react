import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdfx8mbiv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdfx8mbiv"/>`,
		"fallback": "octicon:ruby",
	});
}

export default Component;
