import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgo__obfa.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgo__obfa"/>`,
		"fallback": "fa7-solid:vr-cardboard",
	});
}

export default Component;
