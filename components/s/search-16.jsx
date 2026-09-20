import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hya1gml3g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hya1gml3g"/>`,
		"fallback": "octicon:search-16",
	});
}

export default Component;
