import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfasz3buw.css';
import '../../css/i/iu6mn3bmp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfasz3buw"/><path class="iu6mn3bmp"/>`,
		"fallback": "thesvg:maya",
	});
}

export default Component;
