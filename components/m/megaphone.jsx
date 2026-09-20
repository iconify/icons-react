import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6of4gbjj.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6of4gbjj"/>`,
		"fallback": "picon:megaphone",
	});
}

export default Component;
