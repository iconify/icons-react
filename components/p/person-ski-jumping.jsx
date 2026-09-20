import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8pxs_baj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8pxs_baj"/>`,
		"fallback": "pinhead:person-ski-jumping",
	});
}

export default Component;
