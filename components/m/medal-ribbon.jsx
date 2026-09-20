import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-mf2gvfh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-mf2gvfh"/>`,
		"fallback": "pinhead:medal-ribbon",
	});
}

export default Component;
