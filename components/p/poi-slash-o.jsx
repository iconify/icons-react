import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-18jsbfn.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-18jsbfn"/>`,
		"fallback": "gis:poi-slash-o",
	});
}

export default Component;
