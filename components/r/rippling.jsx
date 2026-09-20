import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5-oqd5ef.css';
import '../../css/n/nhikcvf6f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5-oqd5ef"/><path class="nhikcvf6f"/>`,
		"fallback": "thesvg-color:rippling",
	});
}

export default Component;
