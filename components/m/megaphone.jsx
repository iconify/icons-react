import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us_otrb6w.css';
import '../../css/o/osmzo-b7w.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us_otrb6w"/><path class="osmzo-b7w"/>`,
		"fallback": "formkit:megaphone",
	});
}

export default Component;
