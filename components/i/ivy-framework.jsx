import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpmo8pb3e.css';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpmo8pb3e"/>`,
		"fallback": "thesvg-color:ivy-framework",
	});
}

export default Component;
