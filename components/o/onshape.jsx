import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vigb5_xuj.css';

const viewBox = {"width":220,"height":62};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vigb5_xuj"/>`,
		"fallback": "thesvg-color:onshape",
	});
}

export default Component;
