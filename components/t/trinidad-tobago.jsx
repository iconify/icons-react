import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3qu93bwv.css';
import '../../css/w/wbb6ggb3t.css';
import '../../css/b/bhjcuuxbi.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3qu93bwv"/><path class="wbb6ggb3t"/><path class="bhjcuuxbi"/>`,
		"fallback": "tabler-flags:trinidad-tobago",
	});
}

export default Component;
