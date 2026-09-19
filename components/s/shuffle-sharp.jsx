import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9dxnnbae.css';
import '../../css/s/spzrtb9gd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9dxnnbae"/><path class="spzrtb9gd"/>`,
		"fallback": "famicons:shuffle-sharp",
	});
}

export default Component;
