import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6842ab4y.css';
import '../../css/m/mx48p9b3a.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6842ab4y"/><path class="mx48p9b3a"/>`,
		"fallback": "foundation:page-edit",
	});
}

export default Component;
