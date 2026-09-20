import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpdecacrv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpdecacrv"/>`,
		"fallback": "selfhst:papermerge-dark",
	});
}

export default Component;
